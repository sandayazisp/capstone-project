import WisataDbSource from '../../data/wisatadb-source';
import { createGuideTourItemTemplate, createRekWisataItemTemplate } from '../templates/template-creator';

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
                    <p class="text-center">Bali merupakan destinasi tempat wisata yang terkenal di seluruh manca negara. Keindahan pantai, gunung serta persawahan yang dimiliki oleh bali membuat ketertarikan wisatawan mengunjungi bali</p>                    
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
                        <p class="ps-3 pe-3">Bali juga dikenal dengan sebutan Pulau Dewata, Pulau Seribu Pura, atau Pulau Surga. Karena di samping pantai-pantai Bali yang memang sudah sangat terkenal keindahannya, Bali juga memiliki keindahan alam yang luar biasa dan lengkap, seperti gunung berapi, sawahnya yang bersusun (Terasering Ceking) menghampar hijau memberikan rasa damai dan ketenangan, butiran pasir dan keindahan alam bawah lautnya yang mengagumkan seolah menjadi persembahan keindahan alam yang tiada habisnya, serta keunikan seni budayanya dan berbagai hasil kerajinan tangan yang khas dan fantastis dari para pengrajinnya. Sesuai dengan apa yang disampaikan aktor kenamaan Hollywood, Richard Gere, bahwa masyarakat Bali dianggap tinggal di surga (paradise) yang sangat menyenangkan. Bali adalah tempat berkumpulnya berbagai wisatawan dari seluruh dunia. Bagi wisatawan asing pantai-pantai yang ada di Bali memiliki ombak-ombak yang terkenal sebagai lokasi surfing untuk berselancar seperti di pantai Kuta, Uluwatu, dan pantai Dreamland. Bagi mereka yang suka dengan hal-hal yang menantang yang memacu adrenalin seperti menyelam, rafting, treking dan lainnya semua juga bisa dilakukan di Bali. Ada banyak lokasi wisata yang sayang apabila dilewatkan ketika Anda berada di Bali. Mulai dari wisata pantai, pegunungan, danau, hutan, kebun binatang, atau desa beserta masyarakat Bali yang pada umumnya masih kuat memegang teguh tradisi peninggalaan nenek moyangnya.</p>
                    </div>
                </div>
            </div>

            <div id="rek__wisata" class="pt-5 pb-5">
                <div class="container">
                    <h1 class="text-center pb-5 text-white">Recomended Objek Wisata</h1>
                    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 rek__wisata">
                        <!-- Item Rekomendasi wisata dari api -->
                    </div>
                    <div class="d-grid mt-5">
                        <a class="btn btn-primary mx-auto" href="#/wisata" role="button">Selengkapnya </a>                                                
                    </div>
                </div>
            </div>

            <div id="rek__guidetour">
                <div class="parallax">
                    <div class="container p-5">
                        <h1 class="text-center pb-5 text-white">Tour Guide</h1>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5 border-bottom guideToure">
                                                     
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
                    <div class="row pb-5 gap-5 justify-content-center">
                        <div class="col-md-4 col-lg-3 shadow">
                          <div class="card text-center border-0 shadow-none">
                            <div class="card-body">
                              <h5 class="card-title">Memiliki Jaringan Luas</h5>
                              <img src="images/mind_map.svg" class="card-img w-50 h-50 pt-3 pb-3" alt="...">
                              <p class="card-text">Memiliki jaringan yang luas membuat kami mampu menyediakan berbagai macam tur dan perjalanan wisata yang kamu inginkan.</p>                              
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 col-lg-3 shadow">
                          <div class="card text-center border-0 shadow-none">
                            <div class="card-body">
                              <h5 class="card-title">Profesional</h5>
                              <img src="images/handshake.svg" class="card-img w-50 h-50 pt-3 pb-3" alt="...">
                              <p class="card-text">Mai.Tour memiliki team profesional yang akan membantu merancang rencana perjalanan sesuai yang kamu minati.</p>                              
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 col-lg-3 shadow">
                          <div class="card text-center border-0 shadow-none">
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
    const wisata = await WisataDbSource.home();
    const guide = await WisataDbSource.guide();
    const rekWisataContainer = document.querySelector('.rek__wisata');
    const guideTourContainer = document.querySelector('.guideToure')
    wisata.forEach((wisata) => {
      rekWisataContainer.innerHTML += createRekWisataItemTemplate(wisata);      
    });
    guide.forEach((guide) => {      
      guideTourContainer.innerHTML += createGuideTourItemTemplate(guide);
    });
  },
};

export default Home;
