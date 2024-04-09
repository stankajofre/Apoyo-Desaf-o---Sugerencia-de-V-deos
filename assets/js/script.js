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

// 3. Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia para
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    // Método para mostrar el video en la etiqueta iframe correspondiente
    playMultimedia() {
        Reproductor.playMultimedia(this.getUrl(), this.id);
    }

    // Método para modificar el tiempo de inicio en la URL de la etiqueta iframe polimorfismo
    setInicio(tiempo) {
        const url = this.getUrl() + `?start=${tiempo}`;
        this.setUrl(url);
    }
}

// 4. Instanciar la clase hija Reproductor y mostrar los videos
let musica = new Reproductor(`musica`, "https://www.youtube.com/embed/VIDEO_MUSICA", "iframeMusica");
let pelicula = new Reproductor(`pelicula`, "https://www.youtube.com/embed/VIDEO_PELICULA", "iframePelicula");
let serie = new Reproductor(`serie`, "https://www.youtube.com/embed/VIDEO_SERIE", "iframeSerie");

// Invocar al método playMultimedia para cada instancia creada
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificar el tiempo de inicio en alguna de las instancias creadas
serie.setInicio(30); // Se inicia el video de la serie en el segundo 30

