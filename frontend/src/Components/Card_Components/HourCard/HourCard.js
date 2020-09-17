import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import "./HourCard.css";

function HourCard(props) {
    const [isPM, setPM] = useState(
        props.card.realTime.getHours() >= 12 ? true : false
    );
    return (
        <li className='list-item' style={{ background: props.card.color }}>
            <div className='title'>
                {props.card.isEdit ? (
                    <div>
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            onClick={props.deleteCard.bind(this, props.card.id)}
                            className='icon'
                        />
                        <input
                            type='text'
                            defaultValue={props.card.title}
                            onChange={(change) => {
                                props.setTitle({
                                    title: change.target.value,
                                    id: props.card.id,
                                });
                            }}
                        />
                        <input
                            type='color'
                            value={props.card.color}
                            onChange={(change) => {
                                props.setColor({
                                    id: props.card.id,
                                    color: change.target.value,
                                });
                            }}
                        />
                    </div>
                ) : (
                    <h1>{props.card.title}</h1>
                )}
            </div>
            {props.card.isEdit ? (
                <div className='date-input'>
                    <input
                        type='number'
                        max={12}
                        min={1}
                        defaultValue={
                            props.card.realTime.getHours() > 12
                                ? props.card.realTime.getHours() - 12
                                : props.card.realTime.getHours()
                        }
                        onChange={(change) => {
                            let currentHourChange = change.target.value;
                            if (isPM) {
                                currentHourChange =
                                    parseInt(currentHourChange) + 12;
                            }
                            //console.log(currentHourChange);
                            props.setHour({
                                hour: currentHourChange,
                                id: props.card.id,
                            });
                        }}
                    />
                    <h2>:</h2>
                    <input
                        type='number'
                        max={59}
                        min={0}
                        defaultValue={props.card.realTime.getMinutes()}
                        onChange={(change) => {
                            props.setMinute({
                                minute: change.target.value,
                                id: props.card.id,
                            });
                        }}
                    />
                    <select
                        name='AM/PM'
                        defaultValue={
                            props.card.realTime.getHours() >= 12 ? "pm" : "am"
                        }
                        onChange={(change) => {
                            let hourChange = props.card.realTime.getHours();
                            if (change.target.value === "am") {
                                hourChange -= 12;
                                setPM(false);
                            } else {
                                setPM(true);
                                hourChange += 12;
                            }
                            props.setHour({
                                hour: hourChange,
                                id: props.card.id,
                            });
                        }}
                    >
                        <option value='am'>am</option>
                        <option value='pm'>pm</option>
                    </select>
                    <div
                        className='edit-button'
                        onClick={props.edit.bind(this, props.card.id)}
                    >
                        <FontAwesomeIcon
                            icon={faEdit}
                            onClick={props.deleteCard.bind(this, props.card.id)}
                            className='icon'
                        />
                    </div>
                </div>
            ) : (
                <div className='time-and-edit'>
                    <h2 className='time'>{props.card.time}</h2>
                    <div
                        className='edit-button'
                        onClick={props.edit.bind(this, props.card.id)}
                    >
                        <FontAwesomeIcon
                            icon={faEdit}
                            onClick={props.deleteCard.bind(this, props.card.id)}
                            className='icon'
                        />
                    </div>
                </div>
            )}
            {/*props.isEdit && (
                    <div
                        className='bar'
                        onClick={() => {
                            //console.log("CLICKED");
                        }}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )*/}
        </li>
    );
}

export default HourCard;
