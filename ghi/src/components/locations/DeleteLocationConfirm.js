import React from "react";

const DeleteLocationConfirm = ({ onCancel, onConfirm }) => {
  return (
    <div className="delete-confirmation">
      <div className="modal-content">
        <p>Are you sure you want to delete this location?</p>
        <button onClick={onCancel} className="mr-4">
          Cancel
        </button>
        <button onClick={onConfirm} className="bg-red-500 text-white py-2 px-4 rounded-full">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeleteLocationConfirm;
