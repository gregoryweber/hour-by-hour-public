import React from "react";
import HourCard from "../HourCard/HourCard";
import AddCard from "../AddCard/AddCard";
import "./HourCardList.css";

function HourCardList(props) {
    return (
        <div>
            <ul className='main-list'>
                {props.cards.map((card) => {
                    return (
                        <HourCard
                            key={card.id}
                            card={card}
                            setTitle={props.setTitle}
                            setColor={props.setColor}
                            setHour={props.setHour}
                            setMinute={props.setMinute}
                            edit={props.edit}
                            deleteCard={props.deleteCard}
                        />
                    );
                })}
            </ul>
            <AddCard add={props.add} />
        </div>
    );
}

export default HourCardList;
