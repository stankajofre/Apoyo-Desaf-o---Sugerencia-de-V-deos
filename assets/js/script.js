// 1. Implementar el Patrón Módulo mediante IIFE
const miFuncionIIfe = (() => {
    // Función privada para mostrar el video en el documento HTML
    const mostrarVideo = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    };

    // Función pública que realiza el llamado a la función privada para insertar los elementos
    const playMultimedia = (url, id) => {
        mostrarVideo(url, id);
    };

    // Retornar la función pública
    return {
        playMultimedia
    };
})();

// 2. Clase padre Multimedia
class Multimedia {
    constructor(url) {
        this._url = url;
    }
¨
        
        this.setInicio = () => {

};

/
getUrl = () {
    return this._url;
}


setInicio = () {
    return
}


