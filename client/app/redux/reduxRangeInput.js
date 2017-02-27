import React, { PropTypes } from 'react'

const ReduxRangeInput = ({ onChange }) => (
<input type="range" name="range value" min="0" max="10"
onChange={ (e) => onChange(e.target.value)}/>
)

ReduxRangeInput.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default ReduxRangeInput