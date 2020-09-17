import React from "react";
import "./Main.css";
import HourCardList from "../Components/Card_Components/HourCardList/HourCardList";
import Clock from "react-digital-clock";
import CardMutation from "../Mutations/CardMutation";

import environment from "../relayEnvToken";

function timeToDisplayString(date) {
    const hour = date.getHours();
    const minute = date.getMinutes();

    let newHour = hour > 12 ? hour - 12 : hour;
    if (newHour === 0) {
        newHour = 12;
    }

    let dateString =
        newHour +
        ":" +
        (minute < 10 ? "0" : "") +
        minute +
        (hour >= 12 ? " pm" : " am");

    return dateString;
}

function getCurrCardDisplay(cards) {
    const currentDate = new Date();
    let min = 0;
    for (let i = 0; i < cards.length; i++) {
        if (
            currentDate - cards[i].realTime >= 0 &&
            currentDate - cards[i].realTime < cards[min].realTime
        ) {
            min = i;
        }
    }
    return cards[min];
}

function Main(props) {
    let defaultCards = [];
    if (!props.cards) {
        defaultCards = [
            {
                title: "7 am",
                time: "7:00",
                color: "#25CED1",
            },
            {
                title: "8 am",
                time: "8:00",
                color: "#084C61",
            },
            {
                title: "9 am",
                time: "9:00",
                color: "#FF8A5B",
            },
            {
                title: "10 am",
                time: "10:00",
                color: "#EA526F",
            },
            {
                title: "11 am",
                time: "11:00",
                color: "#172A3A",
            },
            {
                title: "12 pm",
                time: "12:00",
                color: "#25CED1",
            },
            {
                title: "1 pm",
                time: "13:00",
                color: "#084C61",
            },
            {
                title: "2 pm",
                time: "14:00",
                color: "#FF8A5B",
            },
            {
                title: "3 pm",
                time: "15:00",
                color: "#EA526F",
            },
            {
                title: "4 pm",
                time: "16:00",
                color: "#172A3A",
            },
            {
                title: "5 pm",
                time: "17:00",
                color: "#25CED1",
            },
            {
                title: "6 pm",
                time: "18:00",
                color: "#084C61",
            },
            {
                title: "7 pm",
                time: "19:00",
                color: "#FF8A5B",
            },
            {
                title: "8 pm",
                time: "20:00",
                color: "#EA526F",
            },
            {
                title: "9 pm",
                time: "21:00",
                color: "#172A3A",
            },
            {
                title: "10 pm",
                time: "22:00",
                color: "#25CED1",
            },
        ];

        defaultCards = defaultCards.map((card, index) => {
            const newCard = {
                title: card.title + " Event",
                time: card.time,
                realTime: new Date(),
                length: 60,
                color: card.color,
                id: index,
                isEdit: false,
            };
            newCard.realTime.setHours(parseInt(newCard.time.substring(0, 2)));
            newCard.realTime.setMinutes(parseInt(newCard.time.substring(3)));
            newCard.realTime.setSeconds(0);

            newCard.time = timeToDisplayString(newCard.realTime);
            return newCard;
        });
    } else {
        defaultCards = props.cards;
        defaultCards = defaultCards
            .map((card, index) => {
                const newDate = new Date(card.realTime);
                const upToDate = new Date();
                upToDate.setHours(newDate.getUTCHours());
                upToDate.setMinutes(newDate.getMinutes());
                upToDate.setSeconds(0);
                //console.log(card);
                const newCard = {
                    title: card.title,
                    time: card.time,
                    realTime: upToDate,
                    length: card.length,
                    color: card.color,
                    id: index,
                    isEdit: false,
                };
                return newCard;
            })
            .sort((cardA, cardB) => {
                if (cardA.realTime < cardB.realTime) {
                    return -1;
                } else if (cardA.realTime > cardB.realTime) {
                    return 1;
                } else {
                    return 0;
                }
            });
    }

    const [cards, setCards] = React.useState(defaultCards);

    const totalSetCards = (newCards) => {
        setCards(newCards);
        props.updateCards(newCards);
        let newDataCards = [...newCards];
        newDataCards = newCards.map((card) => {
            const newDate = new Date();
            newDate.setUTCHours(card.realTime.getHours());
            newDate.setMinutes(card.realTime.getMinutes());
            newDate.setSeconds(0);
            return {
                title: card.title,
                time: card.time,
                realTime: newDate.toISOString(),
                length: card.length,
                color: card.color,
            };
        });

        CardMutation.commit(environment, {
            userId: props.userId,
            cards: newDataCards,
        });
    };

    const edit = (cardId) => {
        //console.log("THIS WAS CALLED");
        let cardCopy = [...cards];
        let foundCard = cardCopy.find((card) => card.id === cardId);
        foundCard.isEdit = !foundCard.isEdit;
        if (!foundCard.isEdit) {
            const newDate = new Date();
            newDate.setHours(foundCard.realTime.getHours());
            newDate.setMinutes(foundCard.realTime.getMinutes());
            newDate.setSeconds(0);
            foundCard.realTime = newDate;
            cardCopy.sort((cardA, cardB) => {
                if (cardA.realTime < cardB.realTime) {
                    return -1;
                } else if (cardA.realTime > cardB.realTime) {
                    return 1;
                } else {
                    return 0;
                }
            });
            //console.log("confirming input");
            if (props.userId) {
                totalSetCards(cardCopy);
            } else {
                setCards(cardCopy);
            }
        } else {
            setCards(cardCopy);
        }
    };

    const deleteCard = (cardId) => {
        let cardCopy = [...cards];
        cardCopy = cardCopy.filter((card) => card.id !== cardId);
        if (props.userId) {
            totalSetCards(cardCopy);
        } else {
            setCards(cardCopy);
        }
    };

    return (
        <React.Fragment>
            <div className='App'>
                <header
                    className='App-header'
                    style={{
                        background: getCurrCardDisplay(cards).color,
                    }}
                >
                    <Clock />
                    <h1 className='current-activity'>
                        {getCurrCardDisplay(cards).title}
                    </h1>
                </header>
            </div>
            <div className='separator'></div>
            <HourCardList
                cards={cards}
                add={() => {
                    let copy = [...cards];
                    const newTime = new Date();
                    newTime.setHours(0);
                    newTime.setMinutes(0);
                    newTime.setSeconds(0);
                    copy.push({
                        title: "New Event",
                        time: "0:00",
                        color: "#afafaf",
                        id: copy.length,
                        realTime: newTime,
                        length: 60,
                    });
                    setCards(copy);
                }}
                setTitle={(change) => {
                    let cardCopy = [...cards];
                    //console.log(change);
                    ////console.log(cardCopy.find((currCard) => currCard.title+":"+currCard.time == change.id));
                    cardCopy.find(
                        (currCard) => currCard.id === change.id
                    ).title = change.title;
                    setCards(cardCopy);
                }}
                setColor={(change) => {
                    //console.log(change);
                    let cardCopy = [...cards];
                    cardCopy.find(
                        (currCard) => currCard.id === change.id
                    ).color = change.color;
                    ////console.log(cardCopy.find({ title: change.title }));
                    setCards(cardCopy);
                }}
                setHour={(change) => {
                    let cardCopy = [...cards];
                    const cardIndex = cardCopy.findIndex(
                        (currCard) => currCard.id === change.id
                    );
                    cardCopy[cardIndex].realTime.setHours(change.hour);
                    cardCopy[cardIndex].time = timeToDisplayString(
                        cardCopy[cardIndex].realTime
                    );
                    setCards(cardCopy);
                }}
                setMinute={(change) => {
                    let cardCopy = [...cards];
                    const cardIndex = cardCopy.findIndex(
                        (currCard) => currCard.id === change.id
                    );
                    cardCopy[cardIndex].realTime.setMinutes(change.minute);
                    cardCopy[cardIndex].time = timeToDisplayString(
                        cardCopy[cardIndex].realTime
                    );
                    setCards(cardCopy);
                }}
                edit={edit}
                deleteCard={deleteCard}
            />
        </React.Fragment>
    );
}

export default Main;
