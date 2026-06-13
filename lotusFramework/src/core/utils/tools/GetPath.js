export default class GetPath {

    constructor() {

        this._pathFolderIcons  = "../../../../assets/icons/";
        this._pathFolderImages = "../../../../assets/images/";

        this._closeFullscreenIcon =
            this._pathFolderIcons +
            "close_fullscreen_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";

        this._openFullscreenIcon =
            this._pathFolderIcons +
            "fullscreen_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";

        this._homeIcon =
            this._pathFolderIcons +
            "home_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";

        this._perfilIcon =
            this._pathFolderIcons +
            "person_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";

        this._introImageLotus =
            this._pathFolderImages +
            "lotusLogo.png";
    }

    get closeFullscreenIcon()   { return this._closeFullscreenIcon;}
    get openFullscreenIcon()    { return this._openFullscreenIcon;}
    get homeIcon()              { return this._homeIcon;}
    get perfilIcon()            { return this._perfilIcon;}
    get IntroLotusImagePng()    { return this._introImageLotus;}
    get pathFolderIcons()    { return this._pathFolderIcons;}
    get pathFolderImages()   { return this._pathFolderImages;}

    _serveUrlImage(path) { return `url(${path})`;}

    async _proucuraArquivoRetornandoCaminho(nameImage) {

        const extensions = [
            "png",
            "jpg",
            "jpeg",
            "svg",
            "webp"
        ];

        for (const ext of extensions) {

            const path =
                `${this._pathFolderImages}${nameImage}.${ext}`;

            try {

                const response = await fetch(path);

                if (response.ok) {
                    return path;
                }

            } catch {}
        }

        throw new Error(
            `Folder "${nameImage}" is not found !!!`
        );
    }
}