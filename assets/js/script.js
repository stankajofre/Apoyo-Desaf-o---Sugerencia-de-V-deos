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
        this.setInicio = () => {

};

getUrl = () {
    return this._url;
}

setInicio = () {
    return
}
// Función para configurar el video de YouTube en un iframe
function setVideoURL(id, videoUrl) {
    var iframe = document.getElementById(id);
    if (iframe) {
        iframe.src = videoUrl;
    }
}

// Llama a la función setVideoURL para cada categoría
setVideoURL('musica', 'https://www.youtube.com/embed/aJOTlE1K90k'); // Ejemplo con ID de video para música
setVideoURL('peliculas', 'https://www.youtube.com/embed/tgbNymZ7vqY'); // Ejemplo con ID de video para películas
setVideoURL('series', 'https://www.youtube.com/embed/s7L2PVdrb_8'); // Ejemplo con ID de video para series

// Asegúrate de llamar a estas funciones cuando la página ya esté cargada, o colócalas al final del archivo HTML antes de cerrar el tag </body>.



// 3. Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia para
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    // Método para mostrar el video en la etiqueta iframe correspondiente
    playMultimedia() {
        miFuncionIIfe.miFuncionPublica(this._url.this._id);
    }

    // Método para modificar el tiempo de inicio en la URL de la etiqueta iframe polimorfismo
    setInicio(tiempo) {
        this._id.setAttribute(`src`, `${this._url}&amp;start=${tiempo}`);
    }
}


// Invocar al método playMultimedia para cada instancia creada
musica.playMultimedia();
pelicula.playMultimedia();
//serie.setInicio(45);
serie.playMultimedia();




