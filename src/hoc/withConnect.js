import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {ActionCreators} from '../actions/index';

function mapStateToProps(state) {
  return {
    flat: state.reducer.flat,
    login: state.reducer.login,
    persistRehydrate: state.reducer.persistRehydrate,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect;
