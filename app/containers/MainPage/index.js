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
} from './actions';

import Wrapper from './styled/Wrapper';

export class MainPage extends React.Component {
  componentDidMount() {
    this.props.getPersons(0);
  }

  render() {
    const {
      persons,
      selectedPerson,
      modalShown,
    } = this.props.mainPage;
    return (
      <Wrapper>
        <Helmet>
          <title>Person List</title>
          <meta name="description" content="Person List" />
        </Helmet>
        <PersonList
          personId={this.props.match.params.personId}
          persons={persons}
          selectPerson={this.props.selectPerson}
          showModal={this.props.showModal}
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
  }),
  getPersons: PropTypes.func,
  selectPerson: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
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
    getPersons: page => dispatch(getPersons(page)),
    selectPerson: index => dispatch(selectPerson(index)),
    showModal: () => dispatch(showModal()),
    hideModal: () => dispatch(hideModal()),
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
