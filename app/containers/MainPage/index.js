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
import { withRouter } from 'react-router';

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

export class MainPage extends React.Component {
  componentDidMount() {
    this.props.getPersons(0);
  }

  render() {
    const { persons } = this.props.mainPage;
    return (
      <div>
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
        {this.props.mainPage.modalShown && (
          <Overlay>
            <PersonModal
              person={this.props.mainPage.selectedPerson}
              hideModal={this.props.hideModal}
            />
          </Overlay>
        )}
      </div>
    );
  }
}

MainPage.propTypes = {
  mainPage: PropTypes.shape({
    persons: PropTypes.array,
  }),
  getPersons: PropTypes.func,
  selectPerson: PropTypes.func,
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

export default withRouter(
  compose(
    withSaga,
    withConnect,
  )(MainPage),
);
