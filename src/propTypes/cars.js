import PropTypes from 'prop-types'

// Specific type of object using shape function
export const carPropType = PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
})

// Validate we are receiving an array of something
export const carsPropType = PropTypes.arrayOf(carPropType)