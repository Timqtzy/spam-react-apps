import React, { useState, useEffect } from "react";

const Toast = ({ show, message, type, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Automatically close after 3 seconds

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [show, onClose]);

  if (!show) return null;

  // Set toast styles based on message type
  const toastStyles =
    type === "success"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";

  // Set toast icon based on message type
  const toastIcon = type === "success" ? "✔️" : "❌";

  return (
    <div
      id={`toast-${type}`}
      className={`fixed bottom-5 right-5 flex items-center p-4 w-full max-w-xs ${toastStyles} rounded-lg shadow-md`}
      role="alert"
    >
      <div className="flex items-center">
        <span className="mr-2">{toastIcon}</span>
        <span className="text-sm">{message}</span>
      </div>
      <button
        type="button"
        className="ml-3 text-green-800 hover:text-green-600"
        onClick={onClose}
      >
        ✖️
      </button>
    </div>
  );
};

export default Toast;
