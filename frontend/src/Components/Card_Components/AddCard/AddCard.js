import React from "react";

import "./AddCard.css";

function AddCard(props) {
    return (
        <div className='back-border'>
            <button className='plus-button' onClick={props.add}>
                +
            </button>
        </div>
    );
}

export default AddCard;
