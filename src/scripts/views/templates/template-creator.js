const createWisataDetailTemplate = (wisata) => `
            <div class="container pt-5 pb-5">                
                <h1 class="text-center pt-2 text-uppercase">Bali</h1>
                <h1 class="text-center pb-3 border-bottom text-uppercase">${wisata.name}</h1>                   
                <div class="row d-flex flex-wrap align-items-center justify-content-center pt-3" data-bs-toggle="modal" data-bs-target="#lightbox">
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src="${wisata.pictureUrl.url}" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" alt="" /> 
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                         <img src="${wisata.pictureUrl.url2}" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                       <img src="${wisata.pictureUrl.url3}" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"  alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                         <img src="${wisata.pictureUrl.url4}" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                         <img src="${wisata.pictureUrl.url5}" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"  alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                         <img src="${wisata.pictureUrl.url6}" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" alt="" />
                    </div>
                  </div>
                  
                <!-- Modal -->
                <div class="modal fade" id="lightbox" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">                            
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="${wisata.pictureUrl.url}" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="${wisata.pictureUrl.url2}" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="${wisata.pictureUrl.url3}" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="${wisata.pictureUrl.url4}" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="${wisata.pictureUrl.url5}" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="${wisata.pictureUrl.url6}" alt="First slide">
                            </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                
                    </div>
                    </div>
                </div>
                <h4 class="pt-5">Informasi</h4>
                <table class="table w-50 m-auto table-bordered text-center mb-3 mt-3">
                    <thead class="table-light">
                      <tr>
                        <th scope="col">Katagori</th>
                        <th scope="col">Keterangan</th>                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Rating</th>
                        <td>${wisata.rating}</td>                        
                      </tr>
                      <tr>
                        <th scope="row">Jam Operasional</th>
                        <td>${wisata.jamOperasional}</td>                        
                      </tr>                      
                      <tr>
                        <th scope="row">Harga Tiket</th>
                        <td>Rp.${wisata.tiket} / Orang</td>                        
                      </tr>                      
                    </tbody>
                  </table>
                <p>${wisata.description}</p>                
                <p class="note note-light">
                    <strong>Lokasi :</strong> ${wisata.lokasi}
                </p>                                       
            </div>
            <section class="testimonial">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block">
                            <ol class="carousel-indicators tabs">
                                <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active">
                                    <figure>
                                        <img src="${wisata.reviews.review1.pictureUrl}" class="img-fluid" alt="${wisata.reviews.review1.name}">
                                    </figure>
                                </li>
                                <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1">
                                    <figure>
                                        <img src="${wisata.reviews.review2.pictureUrl}" class="img-fluid" alt="${wisata.reviews.review2.name}">
                                    </figure>
                                </li>
                                <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2">
                                    <figure>
                                        <img src="${wisata.reviews.review3.pictureUrl}" class="img-fluid" alt="${wisata.reviews.review3.name}">
                                    </figure>
                                </li>
                            </ol>
                        </div>
                        <div class="col-lg-6 d-flex justify-content-center align-items-center">
                            <div id="carouselExampleIndicators2" data-interval="false" class="carousel slide" data-ride="carousel">
                                <h3 class="text-uppercase">BALI - ${wisata.name}</h3>
                                <h1>REVIEWS</h1>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="quote-wrapper">
                                            <p>${wisata.reviews.review1.review}</p>
                                            <footer class="blockquote-footer fw-bold">${wisata.reviews.review1.date}</footer>
                                            <h3>${wisata.reviews.review1.name}</h3>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="quote-wrapper">                                            
                                            <p>${wisata.reviews.review2.review}</p> 
                                            <footer class="blockquote-footer fw-bold">${wisata.reviews.review2.date}</footer>
                                            <h3>${wisata.reviews.review2.name}</h3>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="quote-wrapper">
                                            <p>${wisata.reviews.review3.review}</p>
                                            <footer class="blockquote-footer fw-bold">${wisata.reviews.review2.date}</footer>
                                            <h3>${wisata.reviews.review3.name}</h3>
                                        </div>
                                    </div>
                                </div>
                                <ol class="carousel-indicators indicators">
                                    <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active"></li>
                                    <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"></li>
                                    <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div id="info__tour">
                <div class="container p-5">               
                  <h2 class="text-center pt-3 pb-3">Hubungi Admin</h2>
                  <h4 class="text-center pb-3">Untuk Mendapatkan Pemandu Wisata yang Baik dan Profesional</h4>                                                
                  <div class="d-grid d-flex gap-2 col-12 justify-content-center mx-auto">
                      <a class="btn btn-outline-info" href="http://wa.me/+6287865950912" target="_blank" rel="noopener" role="button">Whatsapp</a>
                    </div>                       
              </div>
            </div> 
`;

const createRekWisataItemTemplate = (rekWisata) => `                
    <div class="col">
        <div class="card bg-image hover-zoom" data-mdb-toggle="modal" data-mdb-target="#${rekWisata.id}">
            <img class="card-img lazyload" data-src="${rekWisata.pictureUrl}" alt="${rekWisata.name}">
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
                            
                        </div>
                        <div class="row">
                            <div class="col-md-6 p-0 img">
                                <img src="${rekWisata.pictureUrl}" class="img-thumbnail" alt="${rekWisata.name}">
                            </div>
                            <div class="col-md-6 ms-auto p-3">
                                <h4 class="modal-title" id="exampleModalLabel">${rekWisata.name}</h4>
                                <p class="modal__des">${rekWisata.description}</p>                              
                                <button type="button" class="btn btn-info btn-rounded w-100 p-3 fw-bold" data-mdb-dismiss="modal" aria-label="Close"><a class="btn btn-info btn-rounded w-100 p-3 fw-bold" href="${`/#/detail/${rekWisata.id}`}" role="button">Details </a></button>                      
                                
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
            <img class="card-img-top lazyload" data-src="${desWisata.pictureUrl}" alt="${desWisata.name}">
            <div class="card-body overflow-hidden">
                <h5 class="card-title">${desWisata.name}</h5>
                <p class="card-text">${desWisata.description}</p>
                <a href="${`/#/detail/${desWisata.id}`}" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>
`;
const createTourGuideItemTemplate = (tourGuide) => `
    <div class="card mb-5">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid rounded-start w-100 h-100 lazyload" data-src="${tourGuide.pictureUrl}" alt="${tourGuide.name}"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title text-decoration-underline">${tourGuide.name}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Sebagai Guide ${tourGuide.guide}</li>
                <li class="list-group-item">Lokasi : ${tourGuide.kota}</li>
                <li class="list-group-item">Durasi = ${tourGuide.durasi} jam/hari</li>
                <li class="list-group-item">Bahasa yang dikuasi : ${tourGuide.bahasa.map((name) => name.bahasa).join(', ')}</li>
                <li class="list-group-item">${tourGuide.pengalaman}</li>                                       
                <div class="card-footer"> <li class="list-group-item fw-bold text-center bg-light">IDR ${tourGuide.harga}/Hari || Max. ${tourGuide.kapasitas} Orang </li>
                </div>
                <div class="card-footer"> <li class="list-group-item fw-bold text-center"><a class="btn btn-outline-info" href="http://wa.me/+6287865950912" target="_blank" rel="noopener" role="button">Hubungi Admin</a> </li>
                </div>
              </ul>                                                     
        </div>
      </div>
    </div>
</div>
`;

const createGuideTourItemTemplate = (guideTour) => `
    <div class="col">
    <div class="card bg-image hover-shadow">
        <img class="card-img lazyload" data-src="${guideTour.pictureUrl}" alt="${guideTour.name}">
        <div class="card-img-overlay d-flex justify-content-end align-items-center text-center flex-column">
            <h5 class="card-title text-white">Halo Saya</h5>
            <h5 class="card-title text-white p-1">${guideTour.name}</h5>
            <h5 class="card-title text-white">${guideTour.kota}</h5>
            <div class="middle">                
                <a class="btn btn-outline-light" href="#/tour-guide" role="button">Selengkapnya »</a>
            </div>
        </div>
    </div>
    </div>
`;

export {
  createRekWisataItemTemplate,
  createWisataDetailTemplate,
  createGuideTourItemTemplate,
  createDestinasiWisataItemTemplate,
  createTourGuideItemTemplate,
};
