import React from "react";
import { useEffect } from "react";

const SuccessMessage = ({ show, onHide }) => {
    useEffect(() => {
    if (show) {
        const timeout = setTimeout(() => {
        onHide(); // Hide the message after 5 seconds
        }, 5000);

        return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
    }
    }, [show, onHide]);


    const messageStyle = {
        backgroundColor: "#4caf50",
        color: "#fff",
        padding: "8px 16px",
        borderRadius: "4px",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        opacity: "0",
        transition: "opacity 0.3s",
    };

    const activeMessageStyle = {
        ...messageStyle,
        opacity: "1",
    };

    return show ? (
        <div style={show ? activeMessageStyle : messageStyle}>
        Your team has successfully been created
        </div>
    ) : null;
    };

export default SuccessMessage;
