import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarTool } from './components/CarTool'

const carList = [
	{ id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'Black', price: 22000 },
	{ id: 2, make: 'Tesla', model: 'Model X', year: 2020, color: 'Red', price: 120000 }
]

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<CarTool cars={carList} />
);