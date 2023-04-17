import express, { Application, json } from "express";
import cors from "cors";

import { config } from "dotenv";

import { mainRouter } from "./routes/main.routes.js";

config();

/*
* @param credentials = access-control-allow-credentials:true
*/
const corsOptions = {
    origin:'*',
    credentials: true,
    optionSuccessStatus: 200,
}

const main = async (): Promise<void> => {
    const app: Application = express();

    app.use(json());
    app.use(cors(corsOptions));
    app.set("port", Number(process.env.PORT));

    app.get("/", (req, res) => {
       res.send("<span>Backend server work</span>");
    });

    app.use("/api", mainRouter);

    app.listen(app.get("port"), () => console.log(`Сервер запущен на ${app.get("port")}.`));
}

main().catch((e) => console.error(e));