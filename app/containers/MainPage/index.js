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

import PersonList from 'components/PersonList';
import Pagination from 'components/Pagination';
import PersonModal from 'components/PersonModal';
import Overlay from 'components/Overlay';

import injectSaga from 'utils/injectSaga';
import makeSelectMainPage from './selectors';
import saga from './saga';

import {
  getPersons,
  selectPerson,
  showModal,
  hideModal,
  movePersonItem,
} from './actions';

import Wrapper from './styled/Wrapper';

export class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.movePersonItem = this.movePersonItem.bind(this);
  }

  componentDidMount() {
    this.props.getPersons(0);
  }

  movePersonItem(dragIndex, hoverIndex) {
    const { persons } = this.props.mainPage;
    const person = persons[dragIndex];

    this.props.movePersonItem(dragIndex, hoverIndex, person);
  }

  render() {
    const {
      persons,
      selectedPerson,
      modalShown,
      pagination,
    } = this.props.mainPage;
    return (
      <Wrapper>
        <Helmet>
          <title>Person List</title>
          <meta name="description" content="Person List" />
        </Helmet>
        <Pagination
          pagination={pagination}
          getPersons={this.props.getPersons}
        />
        <PersonList
          personId={this.props.match.params.personId}
          persons={persons}
          selectPerson={this.props.selectPerson}
          showModal={this.props.showModal}
          movePersonItem={this.movePersonItem}
        />

        {modalShown && (
          <Overlay onClick={this.props.hideModal}>
            <PersonModal
              person={selectedPerson}
              hideModal={this.props.hideModal}
              historyPush={this.props.history.push}
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
    modalShown: PropTypes.bool,
    selectedPerson: PropTypes.object,
    pagination: PropTypes.object,
  }),
  getPersons: PropTypes.func,
  selectPerson: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
  movePersonItem: PropTypes.func,
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
    showModal: () => dispatch(showModal()),
    hideModal: () => dispatch(hideModal()),
    movePersonItem: (dragIndex, hoverIndex, person) =>
      dispatch(movePersonItem(dragIndex, hoverIndex, person)),
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
