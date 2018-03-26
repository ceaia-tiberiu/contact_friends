import React from 'react';
import './style.css';

export default ({ accepted, rejected, onClose }) => {
  return (
    <div className="modal">
      <div className="modal_body">
        <h2>You have updated your list of friends</h2>
        <div> Accepted users: {accepted}</div>
        <div> Rejected users: {rejected} </div>
      </div>
      <div className="modal_footer">
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
