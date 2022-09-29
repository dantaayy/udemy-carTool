import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ToolHeader } from './ToolHeader'
import { CarTable } from './CarTable'
import { CarFrom } from './CarFrom'

export const CarTool = (props) => {


    // concat makes a copy of the array so not update table to manipulate this array
    const [cars, setCars] = useState(props.cars.concat())


    const addCar = (car) => {
        // add car to array and call setCars
        setCars(cars.concat({
            ...car,
            id: uuidv4().slice(0, 4),
        }));

    }

    // Map function to transform og array into an array of table row elements
    return (
        <>
            <ToolHeader headerText="Car Tool"></ToolHeader>
            <CarTable cars={cars}></CarTable>
            <CarFrom buttonText="Add Car" onSubmitCar={addCar}></CarFrom>
        </>
    )
}