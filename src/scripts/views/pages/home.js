const Home = {
  async render() {
    return `
        <div id="content-hero">
            <!-- Carousel -->
            <div id="demo" class="carousel slide" data-bs-ride="carousel">
        
                <!-- Indicators/dots -->
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>
        
                <div
                    class="container position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 p-3 text-white w-100 d-flex align-items-center justify-content-center flex-column">
                    <h1>Welcome To</h1>
                    <h1 class="text-md-start">BALI</h1>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. At fuga est doloremque
                        asperiores, minus repudiandae quia vel officia dolor eveniet, amet optio iste aliquam eum delectus
                        perspiciatis beatae autem omnis.</p>                    
                    <a class="btn btn-outline-warning" href="#" role="button">Requirements </a>
                </div>
        
                <!-- The slideshow/carousel -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/hero/hero-1.jpg" alt="Melasti Beach" class="d-block">
                    </div>
                    <div class="carousel-item">
                        <img src="images/hero/hero-2.jpg" alt="GWK Bali" class="d-block">
                    </div>
                    <div class="carousel-item">
                        <img src="images/hero/hero-3.jpg" alt="Nusa Penida" class="d-block">
                    </div>
                </div>
        
                <!-- Left and right controls/icons -->
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>

        <div id="mainContent">
            <div class="container pt-5" id="about__bali">
                <h1 class="text-center pt-2 pb-5">About Bali</h1>
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col">
                        <img src="images/gwk 2.png" class="img-thumbnail w-100 h-75" alt="Patung GWK">
                    </div>
                    <div class="col">
                        <p class="ps-3 pe-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae minima similique natus laudantium expedita blanditiis culpa quos temporibus est fuga hic voluptate odit, fugiat commodi tempora incidunt unde minus totam. Quis ut corporis consequuntur dignissimos optio dolorum exercitationem et numquam ea quasi. Consequatur aperiam excepturi saepe labore cum voluptatem quisquam magni ratione, blanditiis quas. Harum voluptatem delectus cupiditate eius ab sit sapiente, nam optio ut obcaecati itaque. Repellendus eaque doloribus necessitatibus! Facilis, quidem est. Quo dignissimos mollitia excepturi sequi omnis et pariatur impedit illum autem, eveniet neque dolor in ullam. Fugit, temporibus nulla? Nisi eligendi rerum veniam sapiente qui odit praesentium cupiditate vel nostrum impedit magni at totam eos ex tenetur blanditiis laborum, facere, maxime repudiandae? Animi perferendis, suscipit veniam consequatur quaerat quo libero distinctio error accusantium facilis dicta sunt corporis impedit quas fuga? Fuga ullam doloribus sequi aliquam nihil dolorum corrupti natus repellendus voluptate impedit ipsum voluptas iure, error placeat inventore quam totam consectetur sunt. Atque eaque magnam quod, repellat sed quidem illo alias recusandae, nemo dolor aut non ipsa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui esse facilis asperiores blanditiis minima perferendis pariatur magni et. Saepe, illo.</p>
                    </div>
                </div>
            </div>

            <div id="rek__wisata" class="pt-5 pb-5">
                <div class="container">
                    <h1 class="text-center pb-5 text-white">Recomended Objek Wisata</h1>
                    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
                        <div class="col">
                            <div class="card">
                                <img src="images/rekomendasi/alas Harum 3.jpg" class="card-img" alt="Alas Harum">
                                <div class="card-img-overlay">
                                    <h5 class="card-title text-white fw-lighter bg-dark bg-opacity-25 p-2">Alas Harum</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="images/rekomendasi/bedugul 2.jpg" class="card-img" alt="Bedugul">
                                <div class="card-img-overlay">
                                    <h5 class="card-title text-white fw-lighter bg-dark bg-opacity-25 p-2">Bedugul</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="images/rekomendasi/gwk.jpg" class="card-img" alt="Patung GWK">
                                <div class="card-img-overlay">
                                    <h5 class="card-title text-white fw-lighter bg-dark bg-opacity-25 p-2">Patung GWK</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="images/rekomendasi/nusa Penida 3.png" class="card-img" alt="Nusa Penida">
                                <div class="card-img-overlay">
                                    <h5 class="card-title text-white fw-lighter bg-dark bg-opacity-25 p-2">Nusa Penida</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="images/rekomendasi/pura Lempuyang 1.png" class="card-img" alt="Pura Lempuyang">
                                <div class="card-img-overlay">
                                    <h5 class="card-title text-white fw-lighter bg-dark bg-opacity-25 p-2">Pura Lempuyang</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="images/rekomendasi/sekumpul 1.jpg" class="card-img" alt="Sekumpul">
                                <div class="card-img-overlay">
                                    <h5 class="card-title text-white fw-lighter bg-dark bg-opacity-25 p-2">Sekumpul</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="images/rekomendasi/tanah Lot 2.png" class="card-img" alt="Tanah Lot">
                                <div class="card-img-overlay">
                                    <h5 class="card-title text-white fw-lighter bg-dark bg-opacity-25 p-2">Tanah Lot</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="images/rekomendasi/tirta Gangga 1.jpg" class="card-img" alt="Tirta Gangga">
                                <div class="card-img-overlay">
                                    <h5 class="card-title text-white fw-lighter bg-dark bg-opacity-25 p-2">Tirta Gangga</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="images/rekomendasi/tukad Cepung 1.jpg" class="card-img" alt="Tukad Cepung">
                                <div class="card-img-overlay">
                                    <h5 class="card-title text-white fw-lighter bg-dark bg-opacity-25 p-2">Tukad Cepung</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="images/rekomendasi/ulu Watu 1.jpg" class="card-img" alt="Ulu Watu">
                                <div class="card-img-overlay">
                                    <h5 class="card-title text-white fw-lighter bg-dark bg-opacity-25 p-2">Ulu Watu</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-grid mt-5">
                        <a class="btn btn-primary mx-auto" href="#" role="button">Selengkapnya </a>
                    </div>
                </div>
            </div>

            <div id="rek__guidetour">
                <div class="parallax">
                    <div class="container p-5">
                        <h1 class="text-center pb-5 text-white">Tour Guide</h1>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5 border-bottom">
                            <div class="col">
                              <div class="card h-100">
                                <img src="images/guide/guide-1.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">Yosep</h5>
                                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <div class="card h-100">
                                <img src="images/guide/guide-2.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">Dira</h5>
                                  <p class="card-text">This is a short card.</p>
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <div class="card h-100">
                                <img src="images/guide/guide-3.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">Gandi</h5>
                                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                              </div>
                            </div>                            
                        </div>
                        <h2 class="text-center text-white pt-3 pb-3">Quick Response ?</h2>
                        <h2 class="text-center text-white pb-3">Please Contact Us</h2>                                                
                        <div class="d-grid d-flex gap-2 col-12 justify-content-center mx-auto">
                            <a class="btn btn-outline-info" href="#" role="button">Call Us</a> 
                            <a class="btn btn-outline-info" href="#" role="button">Whatsapp</a>
                          </div>                       
                    </div>
                </div>                            
            </div>

            <div id="info__tour">
                <div class="container">
                    <h2 class="text-center pt-5 pb-3">Mengapa Harus Mai.Tour ?</h2>
                    <p class="text-center fw-bold">Dikelola oleh agen lokal Bali, harga lebih terjangkau dengan pelayanan yang ramah khas Bali.</p>
                    <div class="row pb-5">
                        <div class="col-sm-4">
                          <div class="card text-center border-0">
                            <div class="card-body">
                              <h5 class="card-title">Memiliki Jaringan Luas</h5>
                              <img src="images/mind_map.svg" class="card-img w-50 h-50 pt-3 pb-3" alt="...">
                              <p class="card-text">Memiliki jaringan yang luas membuat kami mampu menyediakan berbagai macam tur dan perjalanan wisata yang kamu inginkan.</p>                              
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="card text-center border-0">
                            <div class="card-body">
                              <h5 class="card-title">Profesional</h5>
                              <img src="images/handshake.svg" class="card-img w-50 h-50 pt-3 pb-3" alt="...">
                              <p class="card-text">Mai.Tour memiliki team profesional yang akan membantu merancang rencana perjalanan sesuai yang kamu minati.</p>                              
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="card text-center border-0">
                            <div class="card-body">
                              <h5 class="card-title">Aktivitas & Kreasi Pilihan</h5>
                              <img src="images/money_transfer.svg" class="card-img w-50 h-50 pt-3 pb-3" alt="...">
                              <p class="card-text">Kepuasan anda adalah proritas bagi kami. Seluruh aktivitas tur dan rekreasi memiliki kualitas terbaik di bali.</p>                              
                            </div>
                          </div>
                        </div>                        
                      </div>
                </div>
            </div>
        </div>

      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
