var episodio = {
    imgCover: "",
    numEp: "5",
    year: "2015",
    duration: "20min",
};

var newEpisodio = ["resources/ep1.jpg", "5", "2015", "25min"];

var episodeList = {
    episodios: [],

    addEpisode: function (imgCover, numEp, year, duration) {
        this.episodios.push({
            imgval: imgCover,
            numEpval: numEp,
            yearval: year,
            durationval: duration,
        });
    }
};



//PARA MANEJAR LAS ACCIONES DESDE EL HTML
var handlers = {
    addEpisode: function(){
        episodeList.addEpisode("resources/ep1.jpg", "5", "2015", "25min");
        episodeList.addEpisode("resources/ep1.jpg", "5", "2015", "25min");
        episodeList.addEpisode("resources/ep1.jpg", "5", "2015", "25min");
        view.displayEpisodes();
      },
}

//PARA QUE SE CREE EL HTML Y VER LOS EPISODIOS 
var view = {
    displayEpisodes: function () {
        //ENCONTRAR LA SECCION DE EPISODIOS
        var episodesSection = $( ".episodes" );
        episodesSection.innerHtml = '';

        episodeList.episodios.forEach(function (episodioNew) {
            //CREAR EL DIV DEL EPISODIO
            var innerEpisodeDiv = document.createElement('div');
            innerEpisodeDiv.className = 'episodeChart';

            //CREAR IMAGEN
            var innerimg = document.createElement( '<img src="resources/ep1.jpg" alt="">');
            innerEpisodeDiv.appendChild(innerimg);
            
            // CREAR EL H3
            var innerH3 = document.createElement('h3');
            innerH3.textContent = 'Episodio' + episodioNew.numEpval;

            innerEpisodeDiv.appendChild(innerH3);
            //CREAR EL PARRAFO DEL AÑO
            var innerPYear = document.createElement('p');
            innerPYear.textContent = 'Year:' + episodioNew.yearval;

            innerEpisodeDiv.appendChild(innerPYear);

            //CREAR EL PARRAFO DE DURACION
            var innerPDuration = document.createElement('p');
            innerPDuration.textContent = 'Duration:' + episodioNew.durationval;

            innerEpisodeDiv.appendChild(innerPDuration);

            //CREAR BOTON
            innerEpisodeDiv.appendChild(this.createWatchButton());

            episodesDiv.appendChild(innerEpisodeDiv);


        }, this);
    },

    createWatchButton: function() {
        var watchButton = document.createElement('button');
        watchButton.textContent = 'Watch';
        watchButton.className = 'watch';
          return watchButton;
        }
        
}
