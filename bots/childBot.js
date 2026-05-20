

    if (index !== -1) {

        bots[index] = config;

        saveJSON(
            "./storage/bots.json",
            bots
        );

    }

}

// ======================================
// SEND ROOM MESSAGE
// ======================================

function sendRoomMessage(
    socket,
    room,
    body
) {

    socket.send(JSON.stringify({

        handler: "room_message",

        type: "text",

        room,

        body,

        url: "",

        length: "0",

        id: generatePacketID()

    }));

}

// ======================================

module.exports = {
    start
};
