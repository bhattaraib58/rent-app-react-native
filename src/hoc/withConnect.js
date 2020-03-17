import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActionCreators } from '../actions/index';

/**
 * MapStateToProps.
 *
 * @param {*} state
 * @returns
 */
function mapStateToProps(state) {
  return {
    flat: state.flat,
    login: state.login,
    favoriteFlat: state.favoriteFlat
  };
}

/**
 * MapDispatchToProps.
 *
 * @param {*} dispatch
 * @returns
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect;
