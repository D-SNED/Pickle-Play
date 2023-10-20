import React from 'react';

function LocationCard({ name, address, phoneNumber, pictureUrl }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-md">
            <img
                src={pictureUrl}
                alt="Location"
                className="w-full h-48 object-cover rounded-t-md mb-4"
            />
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                <p className="text-sm text-gray-600 mb-2">{address}</p>
                <p className="text-sm text-gray-600 mb-2">{phoneNumber}</p>
            </div>
        </div>
    );
}

export default LocationCard;
