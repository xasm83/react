
import {connect} from 'react-redux'
import ReduxRangeInput from "./reduxRangeInput"
import {SetRangeValueActionCreator} from "./actions"

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: (rangeValue) => {
            dispatch(SetRangeValueActionCreator(rangeValue))
        }
    }
};

const ReduxRangeInputContainer = connect(
    undefined,
    mapDispatchToProps
)(ReduxRangeInput);

export default ReduxRangeInputContainer;