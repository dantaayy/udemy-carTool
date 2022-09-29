import React from 'react';
import PropTypes from 'prop-types';

// Make header customizable by passing it in as a prop
export const ToolHeader = ({ headerText }) => {
    return <header>
        <h1>{headerText}</h1>
    </header>
}

// default in case headerText isn't specified
ToolHeader.defaultProps = {
    headerText: "The Tool"
}

// validate a string is being passed into headerText
ToolHeader.propTpes = {
    headerText: PropTypes.string,
}