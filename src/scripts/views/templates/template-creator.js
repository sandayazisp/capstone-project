import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createRekWisataItemTemplate = (rekWisata) => `                
    <div class="col">
        <div class="card bg-image hover-zoom" data-mdb-toggle="modal" data-mdb-target="#${rekWisata.id}">
            <img src="${rekWisata.pictureUrl}" class="card-img" alt="${rekWisata.name}">
            <div class="card-img-overlay">
                <h5 class="card-title text-white p-2 w-100 h-100 d-flex justify-content-center align-items-end">${rekWisata.name}</h5>
            </div>
        </div>
    </div>
    <!-- Modal: modalQuickView -->                       
    <!-- Modal -->
    <div class="modal fade" id="${rekWisata.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content">                                    
                <div class="modal-body p-0 m-0">
                    <div class="container-fluid">
                        <div class="modal-header border-0">                                    
                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="row">
                            <div class="col-md-6 p-0 img">
                                <img src="${rekWisata.pictureUrl}" class="img-thumbnail" alt="...">
                            </div>
                            <div class="col-md-6 ms-auto p-3">
                                <h4 class="modal-title" id="exampleModalLabel">${rekWisata.name}</h4>
                                <p class="modal__des">${rekWisata.description}</p>                                                    
                                <a class="btn btn-info btn-rounded w-100 p-3 fw-bold" href="#/wisata" role="button">Details </a>
                            </div>
                        </div>                                                                             
                    </div>
                </div>                                    
            </div>
        </div>
    </div>
  `;

const createDestinasiWisataItemTemplate = (desWisata) => `
    <div class="col">
        <div class="card">
            <img src="${desWisata.pictureUrl}" class="card-img-top" alt="${desWisata.name}">
            <div class="card-body overflow-hidden">
                <h5 class="card-title">${desWisata.name}</h5>
                <p class="card-text">${desWisata.description}</p>
                <a href="#" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>
`;

const createGuideTourItemTemplate = (guideTour) => `
    <div class="col">
    <div class="card bg-image hover-shadow">
        <img src="${guideTour.pictureUrl}" class="card-img" alt="Alas Harum">
        <div class="card-img-overlay d-flex justify-content-end align-items-center text-center flex-column">
            <h5 class="card-title text-white">Hallo Im</h5>
            <h5 class="card-title text-white p-1">${guideTour.name}</h5>
            <h5 class="card-title text-white">${guideTour.kota}</h5>
            <div class="middle">                
                <a class="btn btn-outline-light" href="#" role="button">See More »</a>
            </div>
        </div>
    </div>
    </div>
`

export { createRekWisataItemTemplate, createMovieDetailTemplate, createGuideTourItemTemplate, createDestinasiWisataItemTemplate };
