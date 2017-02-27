import {connect} from 'react-redux'
import ReduxLabel from "./reduxLabel"

const mapStateToProps = (state) => {
    return {
        rangeValue: state.rangeValue
    }
};

const ReduxLabelContainer = connect(
    mapStateToProps,
    undefined
)(ReduxLabel);

export default ReduxLabelContainer