import WisataDbSource from '../../data/wisatadb-source';
import { createDestinasiWisataItemTemplate } from '../templates/template-creator';

const Wisata = {
  async render() {
    return `
    <div id="content-hero__wisata">            
        <div
                class="container position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 p-3 text-white w-50 d-flex align-items-center justify-content-center flex-column" style="height: 30%;">                    
                <h1 class="text-md-start text-center">Destinasi Objek Wisata</h1>                                   
                <h1 class="text-md-start text-center">Bali</h1>                                   
                             
            </div>           
    </div>

        <div id="mainContent">
            <div class="container pt-5" id="about__wisata">
                <h1 class="text-center pt-2 pb-5">Tentang Wisata Bali</h1>                
                <div class="row row-cols-1 row-cols-md-2 pb-5">
                    <div class="col">                        
                        <picture>
                          <source media="(max-width: 600px)" srcset="./images/wna-small.jpg">                          
                          <source media="(max-width: 1024px)" srcset="./images/wna-large.jpg">                          
                              <img src="./images/wna-xl.jpg" class="img-thumbnail w-100 h-100" alt="Pantai Nusa Penida">
                      
                      </picture>
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
                <h2 class="text-center pt-3 pb-3">Hubungi Admin</h2>
                <h4 class="text-center pb-3">Untuk Mendapatkan Pemandu Wisata yang Baik dan Profesional</h4>                                                
                <div class="d-grid d-flex gap-2 col-12 justify-content-center mx-auto">
                    <a class="btn btn-outline-info" href="http://wa.me/+6287865950912" target="_blank" rel="noopener" role="button">Whatsapp</a>
                  </div>                       
            </div>
            </div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const desWisata = await WisataDbSource.wisata();
    const desWisataContainer = document.querySelector('.des__wisata');

    desWisata.forEach((wisata) => {
      desWisataContainer.innerHTML += createDestinasiWisataItemTemplate(wisata);
    });
  },
};

export default Wisata;
