const AboutUs = {
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

<section class="about">
    <div class="container-fluid text-center text-muted">
        <h2>About Us</h2>
    </div>
    </div>
        <div class="row text-center text-muted m-5">
            <div class="col me-5 mt-3">
            <h3>VISI</h3>
            <p>Visi dari Mai.Tour yakni menjadikan no. 1 wadah digital ke bali dan sumber informasi objek wisata terfavorite serta tour guide terpercaya yang ada dibali untuk wisatawan yang ingin mengunjungi bali. 
            Mencerminkan pulau bali dalam segala keindahan, keasrian serta kemenarikannya dimata wisatawan. Pembuatan website ini akan membantu para wisatawan maupun para tour guide yang ada dibali untuk meningkatkan pengenalaan objek wisata yang ada dibali serta melestarikan alam yang ada dibali.</p>
        </div>
            <div class="col ms-5 mt-3">
            <h3>MISI</h3>
            <p>Misi dari Mai.Tour yakni untuk meningkatkan secara keseluruh Bali-Experience bagi orang bali, wisatawan, maupun penduduk yang ada dibali. Dengan upaya yang kami lakukan ini bertujuan untuk mendukung objek wisata yang ada dibali semakin dikenal oleh khalayak luas, serta membantu para tour guide dalam mencari pekerjaannya. Dengan adanya sebuah wadah seperti ini diharapkan orang bali dapat bergerak menuju masa depan yang lebih cerah dan lebih hijau. 
            Misi kami ini dapat dijadikan sebagai wadah untuk para wisatawan agar dapat lebih mengenal objek wisata yang ada dibali serta kemudahan wisatawan dalam mencari tour guide yang digunakan untuk melakukan tour dibali
            </p>
        </div>
        <div class="row text-center mt-3">
            <div class="col">
            <h3>TANGGUNG JAWAB</h3>
            <p>Kami percaya bahwa semua stakeholders, Investor, Pengelola dan Pemilik Bisnis, Pemerintah, LSM, warga, dan yang tak kalah pentingnya para wisatawan perlu menjadi lebih sadar dengan budaya dan lingkungan. Jika Bali ingin berhasil mengelola masuknya investasi modal, wisatawan dan penduduk baru dengan sukses, maka konsep “Keberlanjutan” perlu ditambatkan ke dalam pikiran dan tindakan kita. semua stakeholders saling bergantung satu sama lain. semua stakeholders memiliki tanggung jawab. 
            Salah satu langkah yang dapat dilakukan yaitu dengan memulai dan mendukung Perubahan, kita tidak membutuhkan semua orang untuk berubah, untuk menciptakan perubahan secara keseluruhan. Hanya beberapa yang dapat membuat perbedaan dan yang lain akan mengikuti secara alami. Dan kami bertekad untuk mendukung semua stakeholders yang memutuskan untuk bertindak secara bertanggung jawab dengan mendukung Bali untuk bali lebih dikenal serta lebih dijaga keasriannya
            </p>
        </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,101.3C640,128,800,224,960,224C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
</section>

<div id="info__tour">
          <div class="container p-5">               
            <h2 class="text-center pt-3 pb-3">Quick Response ?</h2>
            <h2 class="text-center pb-3">Please Contact Us</h2>                                                
            <div class="d-grid d-flex gap-2 col-12 justify-content-center mx-auto">
                <a class="btn btn-outline-info" href="#" role="button">Call Us</a> 
                <a class="btn btn-outline-info" href="#" role="button">Whatsapp</a>
              </div>                       
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
