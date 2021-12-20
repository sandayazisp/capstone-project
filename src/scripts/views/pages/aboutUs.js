const AboutUs = {
  async render() {
    return `
        <div id="content-hero__aboutUs">            
            <div
                    class="container position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 p-3 text-white w-50 d-flex align-items-center justify-content-center flex-column" style="height: 30%;">                    
                    <h1 class="text-md-start text-center">Tentang Kami</h1>                                   
                                 
                </div>           
        </div>
        
        <section class="about">
            <div class="container-fluid text-center text-muted">
                <h2>Tentang Kami</h2>
            </div>            
            <div class="row row-cols-1 row-cols-md-2 text-center text-muted m-5">
                <div class="col">
                    <h3>VISI</h3>
                    <p>Visi dari Mai.Tour yakni menjadikan no. 1 wadah digital ke bali dan sumber informasi objek wisata
                        terfavorite serta tour guide terpercaya yang ada dibali untuk wisatawan yang ingin mengunjungi bali.
                        Mencerminkan pulau bali dalam segala keindahan, keasrian serta kemenarikannya dimata wisatawan.
                        Pembuatan website ini akan membantu para wisatawan maupun para tour guide yang ada dibali untuk
                        meningkatkan pengenalaan objek wisata yang ada dibali serta melestarikan alam yang ada dibali.</p>
                </div>
                <div class="col">
                    <h3>MISI</h3>
                    <p>Misi dari Mai.Tour yakni untuk meningkatkan secara keseluruh Bali-Experience bagi orang bali, wisatawan,
                        maupun penduduk yang ada dibali. Dengan upaya yang kami lakukan ini bertujuan untuk mendukung objek
                        wisata yang ada dibali semakin dikenal oleh khalayak luas, serta membantu para tour guide dalam mencari
                        pekerjaannya. Dengan adanya sebuah wadah seperti ini diharapkan orang bali dapat bergerak menuju masa
                        depan yang lebih cerah dan lebih hijau.
                        Misi kami ini dapat dijadikan sebagai wadah untuk para wisatawan agar dapat lebih mengenal objek wisata
                        yang ada dibali serta kemudahan wisatawan dalam mencari tour guide yang digunakan untuk melakukan tour
                        dibali
                    </p>
                </div>
            </div>
            <div class="row row-cols-1 justify-content-center row-cols-md-2 text-center text-muted m-5">
                <div class="col">
                    <h3 class="text-center">TANGGUNG JAWAB</h3>
                    <p class="text-justify">Kami percaya bahwa semua stakeholders, Investor, Pengelola dan Pemilik Bisnis, Pemerintah, LSM,
                        warga, dan yang tak kalah pentingnya para wisatawan perlu menjadi lebih sadar dengan budaya dan
                        lingkungan. Jika Bali ingin berhasil mengelola masuknya investasi modal, wisatawan dan penduduk baru
                        dengan sukses, maka konsep “Keberlanjutan” perlu ditambatkan ke dalam pikiran dan tindakan kita.
                        semua stakeholders saling bergantung satu sama lain. semua stakeholders memiliki tanggung jawab.
                        Salah satu langkah yang dapat dilakukan yaitu dengan memulai dan mendukung Perubahan, kita tidak
                        membutuhkan semua orang untuk berubah, untuk menciptakan perubahan secara keseluruhan. Hanya
                        beberapa yang dapat membuat perbedaan dan yang lain akan mengikuti secara alami. Dan kami bertekad
                        untuk mendukung semua stakeholders yang memutuskan untuk bertindak secara bertanggung jawab dengan
                        mendukung Bali untuk bali lebih dikenal serta lebih dijaga keasriannya
                    </p>
                </div>                
            </div>                       
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1"
                    d="M0,160L80,138.7C160,117,320,75,480,101.3C640,128,800,224,960,224C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </path>
            </svg>
        </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
