// Importando bibliotecas
import cors from "cors"; //lib responsável por linkar o frontend com o backend
import express from "express";

//Importando função de download
import { download } from "./download.js";

const app = express();
app.use(cors());

app.get("/summary/:id", (request, response) => {
    download(request.params.id);

    response.json({ result: "Download do vídeo realizado com sucesso!" });
});

app.listen(3333, () => console.log("server is running on port 3333"));
