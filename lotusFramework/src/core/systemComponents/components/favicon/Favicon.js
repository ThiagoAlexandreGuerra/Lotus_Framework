import GetPath from "../../../utils/tools/GetPath.js";
export default class Favicon {

    constructor(
        title = "Lotus",
        caminhoFaviconImage = null
    ) {
        this._paths = new GetPath();

        this._configurarGuia(
            title,
            caminhoFaviconImage || this._paths.IntroLotusImagePng
        );
    }

    _configurarGuia(titulo, caminhoFaviconImage) {

        document.title = titulo;

        let favicon =
            document.querySelector("link[rel='icon']");

        if (!favicon) {
            favicon = document.createElement("link");
            favicon.rel = "icon";
            document.head.appendChild(favicon);
        }

        favicon.href = caminhoFaviconImage;
    }
}