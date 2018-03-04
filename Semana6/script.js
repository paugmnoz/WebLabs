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

episodeList.addEpisode("resources/ep1.jpg", "5", "2015", "25min");
episodeList.addEpisode("resources/ep1.jpg", "5", "2015", "25min");
episodeList.addEpisode("resources/ep1.jpg", "5", "2015", "25min");

var view = {
    displayEpisodes: function () {
        var episodesDiv = $( ".episodes" );
        episodesDiv.innerHtml = '';

        episodeList.episodios.forEach(function (episodioNew, position) {
            var episodeDiv = document.createElement('div');
            episodeDiv.className = 'episodeChart';

            var innerimg = document.createElement( ' <img src=' + episodioNew.imgval + 'alt="" >');
            episodeDiv.appendChild(innerimg);
            
            // CREAR EL H3
            var innerH3 = document.createElement('h3');
            innerH3.textContent = 'Episodio' + episodioNew.numEpval;

            episodeDiv.appendChild(innerH3);

            //CREAR EL PARRAFO DEL AÑO
            var innerPYear = document.createElement('p');
            innerPYear.textContent = 'Year:' + episodioNew.yearval;

            episodeDiv.appendChild(innerPYear);

            //CREAR EL PARRAFO DE DURACION
            var innerPDuration = document.createElement('p');
            innerPDuration.textContent = 'Duration:' + episodioNew.durationval;

            episodeDiv.appendChild(innerPDuration);

            //CREAR BOTON
            episodeDiv.appendChild(this.createWatchButton());


        }, this);
    },

    createWatchButton: function() {
        var watchButton = document.createElement('button');
        watchButton.textContent = 'Watch';
        watchButton.className = 'watch';
          return watchButton;
        }
        
}


view.displayEpisodes();