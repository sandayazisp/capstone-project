const TourGuide = {
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

<div id="mainContent">
        <div class="container pt-5 mb-5" id="tour">
            <h1 class="text-center pt-2 pb-5">About Tour Guide</h1>
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col text-center mb-5 mt-5 text-muted">
                    <p class="ps-3 pe-3">Tour Guide yakni orang yang bertugas mendampingi, memberi Informasi dan membantu wisatawan mencukupi kebutuhannya sepanjang berada di sebuah kawasan wisata. Mai.Tour menyediakan tour guide yang professional, memiliki pengetahuan serta pengalaman terbaik tentang keindahan tersembunyi setiap daerah wisata. Kami menjamin setiap mitra pemandu wisata kami memiliki lisensi resmi dan ahli dibidangnya.</p>
                </div>
                <div class="col">
                    <img src="images/guide/tour.png" class="img-thumbnail w-100 h-100" alt="tour guide">
                </div>
            </div>
        </div>
        
        <section id="daftar">
            <h2 class="text-center">Pendaftaran Guide Tour</h2> 
            <p class="text-center">Dibuka pendaftaran pemandu wisata untuk menjual layanan anda secara online. <B>Ayo Daftar sebagai guide tour bali</p>
            <div class="d-grid gap-1 col-2 mx-auto">
                <button class="btn btn-primary center-block" type="button">Daftar Sekarang</button>
            </div>
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

export default TourGuide;
