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
            <div class="container pt-5" id="about__wisata">
                <h1 class="text-center pt-2 pb-5">About Wisata Bali</h1>
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col">
                        <img src="images/gwk 2.png" class="img-thumbnail w-100 h-75" alt="Patung GWK">
                    </div>
                    <div class="col">
                        <p class="ps-3 pe-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae minima similique natus laudantium expedita blanditiis culpa quos temporibus est fuga hic voluptate odit, fugiat commodi tempora incidunt unde minus totam. Quis ut corporis consequuntur dignissimos optio dolorum exercitationem et numquam ea quasi. Consequatur aperiam excepturi saepe labore cum voluptatem quisquam magni ratione, blanditiis quas. Harum voluptatem delectus cupiditate eius ab sit sapiente, nam optio ut obcaecati itaque. Repellendus eaque doloribus necessitatibus! Facilis, quidem est. Quo dignissimos mollitia excepturi sequi omnis et pariatur impedit illum autem, eveniet neque dolor in ullam. Fugit, temporibus nulla? Nisi eligendi rerum veniam sapiente qui odit praesentium cupiditate vel nostrum impedit magni at totam eos ex tenetur blanditiis laborum, facere, maxime repudiandae? Animi perferendis, suscipit veniam consequatur quaerat quo libero distinctio error accusantium facilis dicta sunt corporis impedit quas fuga? Fuga ullam doloribus sequi aliquam nihil dolorum corrupti natus repellendus voluptate impedit ipsum voluptas iure, error placeat inventore quam totam consectetur sunt. Atque eaque magnam quod, repellat sed quidem illo alias recusandae, nemo dolor aut non ipsa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui esse facilis asperiores blanditiis minima perferendis pariatur magni et. Saepe, illo.</p>
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
