const express = require("express");
const mongodb = require("mongodb");

async function run() {
    const client = await mongodb.MongoClient.connect("mongodb://localhost:27017/chat");
    const db = client.db();
    const Message = db.collection("messages");

    const app = express();

    app.use(express.static("../fe/public"));

    app.get("/api/notes", async (req, res, next) => {
        const messages = await Message.find({}).toArray();
        res.json({
            data: messages
        })
    });

    app.listen(1337);
}

run();