/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Header from 'components/Header';
import PersonList from 'components/PersonList';
import PersonModal from 'components/PersonModal';
import Overlay from 'components/Overlay';
import AddPerson from 'components/AddPerson';

import injectSaga from 'utils/injectSaga';
import makeSelectMainPage from './selectors';
import saga from './saga';

import {
  getPersons,
  selectPerson,
  toggleInfoModal,
  toggleAddModal,
  movePersonItem,
  updateSearchFilter,
  addPerson,
  deletePerson,
  updateName,
} from './actions';

import Wrapper from './styled/Wrapper';

export class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.movePersonItem = this.movePersonItem.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.props.getPersons(0);
  }

  movePersonItem(dragIndex, hoverIndex) {
    const { persons } = this.props.mainPage;
    const person = persons[dragIndex];

    this.props.movePersonItem(dragIndex, hoverIndex, person);
  }

  search() {}

  render() {
    const {
      persons,
      selectedPerson,
      pagination,
      modals,
      searchFilter,
      name,
    } = this.props.mainPage;

    return (
      <Wrapper>
        <Helmet>
          <title>Person List</title>
          <meta name="description" content="Person List" />
        </Helmet>
        <Header
          getPersons={this.props.getPersons}
          historyPush={this.props.history.push}
          paginationStart={pagination.start}
        />
        <PersonList
          persons={persons}
          personId={this.props.match.params.personId}
          pagination={pagination}
          selectPerson={this.props.selectPerson}
          toggleInfoModal={this.props.toggleInfoModal}
          toggleAddModal={this.props.toggleAddModal}
          movePersonItem={this.movePersonItem}
          getPersons={this.props.getPersons}
          searchFilter={searchFilter}
          updateSearchFilter={this.props.updateSearchFilter}
        />

        {modals.info && (
          <Overlay
            toggleModal={this.props.toggleInfoModal}
            historyPush={this.props.history.push}
          >
            <PersonModal
              person={selectedPerson}
              toggleModal={this.props.toggleInfoModal}
              historyPush={this.props.history.push}
            />
          </Overlay>
        )}

        {modals.add && (
          <Overlay
            toggleModal={this.props.toggleAddModal}
            historyPush={this.props.history.push}
          >
            <AddPerson
              name={name}
              addPerson={this.props.addPerson}
              toggleModal={this.props.toggleAddModal}
              updateName={this.props.updateName}
            />
          </Overlay>
        )}
      </Wrapper>
    );
  }
}

MainPage.propTypes = {
  mainPage: PropTypes.shape({
    persons: PropTypes.array,
    selectedPerson: PropTypes.object,
    pagination: PropTypes.object,
    searchFilter: PropTypes.string,
    modals: PropTypes.shape({
      info: PropTypes.bool,
      add: PropTypes.bool,
    }),
  }),
  getPersons: PropTypes.func,
  selectPerson: PropTypes.func,
  movePersonItem: PropTypes.func,
  updateSearchFilter: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      personId: PropTypes.string,
    }),
  }),
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPersons: startIndex => dispatch(getPersons(startIndex)),
    selectPerson: index => dispatch(selectPerson(index)),
    toggleInfoModal: () => dispatch(toggleInfoModal()),
    toggleAddModal: () => dispatch(toggleAddModal()),
    movePersonItem: (dragIndex, hoverIndex, person) =>
      dispatch(movePersonItem(dragIndex, hoverIndex, person)),
    updateSearchFilter: query => dispatch(updateSearchFilter(query)),
    addPerson: person => dispatch(addPerson(person)),
    deletePerson: index => dispatch(deletePerson(index)),
    updateName: name => dispatch(updateName(name)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withSaga,
  withConnect,
)(MainPage);
