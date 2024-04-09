// 1. Implementar el Patrón Módulo mediante IIFE
const reproductor = (() => {
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
        let _url = url; // Atributo protegido implementado con closures

        // Método para realizar un cambio en la URL del video
        this.setInicio = () => {
            return "Este método es para realizar un cambio en la URL del video";
        };

        // Getter para acceder al atributo url
        this.getUrl = () => _url;

        // Setter para modificar el atributo url
        this.setUrl = (newUrl) => {
            _url = newUrl;
        };
    }
}

// 3. Clase hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    // Método para mostrar el video en la etiqueta iframe correspondiente
    playMultimedia() {
        Reproductor.playMultimedia(this.getUrl(), this.id);
    }

    // Método para modificar el tiempo de inicio en la URL de la etiqueta iframe
    setInicio(tiempo) {
        const url = this.getUrl() + `?start=${tiempo}`;
        this.setUrl(url);
    }
}

// 4. Instanciar la clase hija Reproductor y mostrar los videos
const musica = new Reproductor("https://www.youtube.com/embed/VIDEO_MUSICA", "iframeMusica");
const pelicula = new Reproductor("https://www.youtube.com/embed/VIDEO_PELICULA", "iframePelicula");
const serie = new Reproductor("https://www.youtube.com/embed/VIDEO_SERIE", "iframeSerie");

// Invocar al método playMultimedia para cada instancia creada
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificar el tiempo de inicio en alguna de las instancias creadas
serie.setInicio(30); // Se inicia el video de la serie en el segundo 30
