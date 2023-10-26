import React from 'react';
import { Link } from 'react-router-dom';

function LocationCard({ name, address, phoneNumber, pictureUrl, locationId }) {
    return (
        <Link to={`${process.env.PUBLIC_URL}/locations/${locationId}`}>
            <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-md">
                <img
                    src={pictureUrl}
                    alt="Location"
                    className="w-full h-48 object-cover rounded-t-md mb-4"
                />
                <div className="text-center">
                    <h2 className="text-2xl text-gray-600 font-semibold mb-2">{name}</h2>
                    <p className="text-sm text-gray-600 mb-2">{address}</p>
                    <p className="text-sm text-gray-600 mb-2">{phoneNumber}</p>
                </div>
            </div>
        </Link>
    );
}

export default LocationCard;
