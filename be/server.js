const dotenv = require("dotenv");
const express = require("express");
const mongodb = require("mongodb");

dotenv.config();

async function run() {
    const client = await mongodb.MongoClient.connect(process.env.DB_URL);
    const db = client.db();
    const Message = db.collection("messages");

    const app = express();

    app.use(express.json());

    app.use(express.static("../fe/public"));

    app.get("/api/messages", async (req, res, next) => {
        const messages = await Message.find({}).toArray();
        res.json({
            data: messages
        })
    });

    app.post("/api/messages", async (req, res, next) => {
        await Message.insertOne({
            body: req.body.body
        });
        res.sendStatus(200);
    });

    app.listen(1337);
}

run();