import WisataDbSource from '../../data/wisatadb-source';
import { createDestinasiWisataItemTemplate } from '../templates/template-creator';

const Wisata = {
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
                    <h1>Explore Objek Wisata</h1>
                    <h1 class="text-md-start">BALI</h1>
                    <p class="text-center">Bali merupakan destinasi tempat wisata yang terkenal di seluruh manca negara. Keindahan pantai, gunung serta persawahan yang dimiliki oleh bali membuat ketertarikan wisatawan mengunjungi bali.</p>                   
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
            <div class="container pt-5" id="about__wisata">
                <h1 class="text-center pt-2 pb-5">About Wisata Bali</h1>
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col">
                        <img src="images/gwk 2.png" class="img-thumbnail w-100 h-75" alt="Patung GWK">
                    </div>
                    <div class="col">
                        <p class="ps-3 pe-3">Pulau Bali merupakan destinasi wisata paling populer di Indonesia. Bali memiliki resor terbaik di dunia berpadu dengan pantai-pantai yang menawan yang sangat terkenal keindahannya dengan segala aktifitas dan gemerlap kehidupan malam yang meriah serta pesona alamnya yang tiada tara. Pulau Bali terletak di antara Pulau Jawa dan Pulau Lombok. Ibu kota provinsinya ialah Denpasar yang terletak di bagian selatan pulau ini. Berbagai penghargaan Internasional khususnya dibidang pariwisata telah diberikan pada Bali diantaranya oleh Majalah Travel and Leisure memilih Bali sebagai World's Best Island tahun 2009, sementara Lonely Planet's memilih Bali sebagai peringkat kedua Best of Travel 2010. Oleh karena itu Bali telah menjadi tujuan pariwisata bagi wisatawan lokal dan wisatawan seluruh dunia, khususnya bagi para wisatawan Jepang dan Australia sebagai jumlah wisatawan terbanyak, kemudian wisatawan dari Taiwan, Eropa, Inggris, Amerika, Singapura dan Malaysia, dll.</p>
                    </div>
                </div>
            </div>

            <div id="des__wisata">
                <div class="parallax pt-5 pb-5">
                    <!-- <div class="container"> -->
                        <h1 class="text-center pb-5 text-white">Destinasi Objek Wisata</h1>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mx-auto des__wisata">
                           <!-- Destinasi Wisata -->
                        </div>
                    <!-- </div> -->
                </div>
            </div>       

            <div id="info__tour">
              <div class="container p-5">               
                <h2 class="text-center pt-3 pb-3">Quick Response ?</h2>
                <h2 class="text-center pb-3">Please Contact Us</h2>                                                
                <div class="d-grid d-flex gap-2 col-12 justify-content-center mx-auto">
                    <a class="btn btn-outline-info" href="#" role="button">Call Us</a> 
                    <a class="btn btn-outline-info" href="#" role="button">Whatsapp</a>
                  </div>                       
            </div>
            </div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const desWisata = await WisataDbSource.wisata();
    console.log(desWisata);
    const desWisataContainer = document.querySelector('.des__wisata');
    desWisata.forEach((wisata) => {
      desWisataContainer.innerHTML += createDestinasiWisataItemTemplate(wisata);
    });
  },
};

export default Wisata;
