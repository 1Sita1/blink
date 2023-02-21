const { createServer } = require("http")
const { Server } = require("socket.io")

const httpServer = createServer()
const io = new Server(httpServer, {
    /* options */
})

io.on("connection", (socket) => {
    console.log("connected")
    socket.on("light", (data) => {
        if (data.state === "on") io.emit("lightOn")
        else io.emit("lightOff")
    })
})

httpServer.listen(5500)
