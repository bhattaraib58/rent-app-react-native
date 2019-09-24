import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { ActionCreators } from '../actions/index';

function mapStateToProps(state) {
    return {
        flat: state.flat,
        login: state.login,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

const withConnect = compose(connect(mapStateToProps, mapDispatchToProps));

export default withConnect;