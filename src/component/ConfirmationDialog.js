import React from 'react';

export default function ConfirmationDialog(props) {
    return (
        <div className="confirmation-dialog">
            <p>{props.message}</p>
            <button onClick={props.onConfirm} className="btn btn-primary btn-sm">Yes</button>
            <button onClick={props.onCancel}>No</button>
        </div>
    );
}
