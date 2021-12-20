import WisataDbSource from "../../data/wisatadb-source";
import { createGuideTourItemTemplate, createTourGuideItemTemplate } from "../templates/template-creator";

const TourGuide = {
  async render() {
    return `
    <div id="content-hero__tourGuide">            
        <div
                class="container position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 p-3 text-white w-50 d-flex align-items-center justify-content-center flex-column" style="height: 30%;">                    
                <h1 class="text-md-start text-center">Pemandu Wisata</h1>                                   
                <h1 class="text-md-start text-center">Bali</h1>                                   
                             
            </div>           
    </div>

<div id="mainContent">
        <div class="container pt-5 mb-5" id="tour">
            <h1 class="text-center pt-2 pb-5">Tentang Pemandu Wisata</h1>
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col text-center mb-5 mt-5 text-muted">
                    <p class="ps-3 pe-3">Pemandu Wisata yakni orang yang bertugas mendampingi, memberi Informasi dan membantu wisatawan mencukupi kebutuhannya sepanjang berada di sebuah kawasan wisata. Mai.Tour menyediakan Pemandu Wisata yang professional, memiliki pengetahuan serta pengalaman terbaik tentang keindahan tersembunyi setiap daerah wisata. Kami menjamin setiap mitra pemandu wisata kami memiliki lisensi resmi dan ahli dibidangnya.</p>
                </div>
                <div class="col">                    
                    <picture>
                      <source media="(max-width: 600px)" srcset="./images/tour-small.jpg">
                      <source media="(max-width: 1024px)" srcset="./images/tour-large.jpg">
                      <img 
                          src="./images/tour-xl.jpg" 
                          class="img-thumbnail w-100 h-100" alt="Pemandu Wisata"></img>
                  
                  </picture>
                </div>
            </div>
        </div>
        
        <div class="container px-2">
        <h2 class="text-center pt-2 pb-4">Pemandu Wisata</h2>
        <div class="tourguide"></div>        
      </div>      

      <section id="daftar">
    <h2 class="text-center">Pendaftaran Pemandu Wisata</h2> 
      <div class="row row-cols-1 row-cols-md-2 w-75 m-auto p-3">
          <div class="col p-3">
          <h5 class="text-start">Syarat Pendaftaran Pemandu Wisata</h5>
          <ul>
              <li> Laki-laki/perempuan berusia minimal 18 Tahun</li>
              <li> Memiliki pengalaman bekerja dibidang pariwisata</li>
              <li> Bersedia menjaga kelestarian pariwisata indonesia dan nama baik Pemandu Wisata</li>
              <li> Memiliki smartphone dengan aspek yang dapat mengakses internet dengan baik</li>
          </ul>           
          <p class="fst-italic text-muted"><small>*Semua dokumen yang perlu disiapkan dikirimkan lewat Google Form yang tersedia di link daftar dibawah</small></p>
          </div>
          <div class="col p-3">
        <h5 class="text-start">Dokumen Yang Perlu Disiapkan</h5>
          <ul>
              <li> KTP</li>
              <li> CV</li>
              <li> Sertifikat profesi pemandu wisata (Opsional)</li>
              <li> Rekening Bank</li>
          </ul> 
          
          </div>          
      </div>      
          <p class="text-center">Dibuka pendaftaran pemandu wisata untuk menjual layanan anda. <B>Ayo Daftar sebagai guide tour bali</B></p>
          <p class="fst-italic text-center">klik daftar sekarang untuk menuju ke Google Form</p>
          <div class="d-grid gap-1 col-2 mx-auto">       
              <a class="btn btn-primary" href="https://forms.gle/623ZD7D8MjVSoeVH6" target="_blank" rel="noopener" role="button">Daftar Sekarang</a>
          </div>
      </section>        
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const tourGuide = await WisataDbSource.guide();       
    const tourGuideContainer = document.querySelector('.tourguide');
    tourGuide.forEach((tour) => {
      tourGuideContainer.innerHTML += createTourGuideItemTemplate(tour);
    });
  },
};

export default TourGuide;
