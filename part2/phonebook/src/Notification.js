import React from "react";

export const Notification = ({ message }) => {
  const messageStyle = {
    color: 'hsl(146.7,46.4%,15.1%)',
    background: 'hsl(146.7,46.4%,85.1%)',
    padding: '1rem',
    border: '3px solid hsl(146.7,46.4%,15.1%)',
    borderRadius: '5px',
    margin: '1rem'
  }
  if (message === null) {
    return null;
  }

  return <div style={messageStyle}>{message}</div>;
};
