import React, { PropTypes } from 'react'

const ReduxLabel = ({ rangeValue }) => (
<div > {rangeValue} </div>
)

ReduxLabel.propTypes = {
    rangeValue: PropTypes.string.isRequired
}

export default ReduxLabel