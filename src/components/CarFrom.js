import React, { useState } from 'react';
import PropTypes from 'prop-types';

// pass in event handler function
export const CarFrom = ({ onSubmitCar, buttonText }) => {

    const [carForm, setCarForm] = useState({
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0
    })

    const change = (e) => {
        setCarForm({
            // Object spread to copy the form inputs in carForm
            ...carForm,
            // IF type number convert to number otherwise keep as string
            [e.target.name]: e.target.type === 'number' ?
                Number(e.target.value) : e.target.value,
        })
    }

    const submitCar = () => {
        // create new object with spread operator
        onSubmitCar({ ...carForm })
        // set carForm to original state
        setCarForm({
            make: '',
            model: '',
            year: 1900,
            color: '',
            price: 0
        });
    }

    return (
        <form>
            <div>
                <label htmlFor="make-input">Make:</label>
                <input type="text" id="make-input" name="make"
                    value={carForm.make} onChange={change} />
            </div>
            <div>
                <label htmlFor="model-input">Model:</label>
                <input type="int" id="model-input" name="model"
                    value={carForm.model} onChange={change} />
            </div>
            <div>
                <label htmlFor="year-input">Year:</label>
                <input type="number" id="year-input" name="year"
                    value={carForm.year} onChange={change} />
            </div>
            <div>
                <label htmlFor="color-input">Color:</label>
                <input type="text" id="color-input" name="color"
                    value={carForm.color} onChange={change} />
            </div>
            <div>
                <label htmlFor="price-input">Price:</label>
                <input type="number" id="price-input" name="price"
                    value={carForm.price} onChange={change} />
            </div>
            <button type="button" onClick={submitCar}>{buttonText}</button>
        </form>
    );
};

CarFrom.defaultProps = {
    buttonText: 'Submit Car'
}

CarFrom.propTypes = {
    buttonText: PropTypes.string,
    onSubmitCar: PropTypes.func.isRequired
}