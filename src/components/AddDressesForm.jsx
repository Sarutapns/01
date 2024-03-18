import React, { useState } from "react";
import axios from 'axios';

const AddDressForm = () => {
    const [dressesName, setDressesName] = useState('');
    const [dressesType, setDressesType] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/dresses', {
                dressesName,
                dressesType,
                color,
                size,
                price,
            });
            console.log(response.data);
            setDressesName('');
            setDressesType('');
            setColor('');
            setSize('');
            setPrice('');
            setError('');
            alert('Dress added successfully!');
        } catch (error) {
            setError(error.response.data.error);
        }
    };

    return (
        <div>
            <h2>Add Dress</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={dressesName} onChange={(e) => setDressesName(e.target.value)} required />
                </div>
                <div>
                    <label>Type:</label>
                    <input type="text" value={dressesType} onChange={(e) => setDressesType(e.target.value)} required />
                </div>
                <div>
                    <label>Color:</label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required />
                </div>
                <div>
                    <label>Size:</label>
                    <input type="text" value={size} onChange={(e) => setSize(e.target.value)} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <button type="submit">Add Dress</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default AddDressForm;
