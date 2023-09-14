// Importando bibliotecas
import ytdl from "ytdl-core"; //lib que faz o download do vídeo
import fs from "fs";
import { error } from "console";

export const download = (videoId) => {
    const videoUrl = "https://www.youtube.com/shorts/" + videoId;
    console.log("Fazendo download do vídeo: " + videoId);

    ytdl(videoUrl, { filter: "audioonly", quality: "lowestaudio" })
        .on("info", (info) => {
            const seconds = info.formats[0].approxDurationMs / 1000;

            if (seconds > 60) {
                throw new Error(
                    "A duração desse vídeo é maior do que 60 segundos"
                );
            }
        })
        .on("end", () => {
            console.log("Download do vídeo finalizado.");
        })
        .on("error", (error) => {
            console.log(
                "Não foi possível fazer o download do vídeo. Detalhes do erro: ",
                error
            );
        })
        .pipe(fs.createWriteStream("./tmp/audio.mp4"));
};
