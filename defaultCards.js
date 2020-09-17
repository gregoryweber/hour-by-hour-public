function timeToDisplayString(date) {
    const hour = date.getUTCHours();
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

let defaultCards = [
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
    };
    newCard.realTime.setUTCHours(parseInt(newCard.time.substring(0, 2)));
    newCard.realTime.setMinutes(parseInt(newCard.time.substring(3)));
    newCard.realTime.setSeconds(0);

    newCard.time = timeToDisplayString(newCard.realTime);

    newCard.realTime = newCard.realTime.toISOString();

    return newCard;
});

export default defaultCards;
