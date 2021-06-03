"use strict";

const server = require("./server");

const startServer = async () => {
    try {
        const config = {
            host: "localhost",
            port: 8080
        };

        const app = await server(config);
        await app.start();
    } catch (e) {
        console.log("startup error", e);
    }
}

startServer()