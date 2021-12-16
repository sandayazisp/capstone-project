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
        
        <div class="container px-2">
        <h2 class="text-center pt-2 pb-4">All Tour Guide</h2>
        <div class="row gx-3 mb-5 text-center">
            <div class="col-4">
                <div class="p-2 border bg-light">
                <img src="images/guide/tour.png" class="img-thumbnail w-100 h-100" alt="tour guide">
                <p class="fw-bold text-decoration-underline">Putu Bagia</p>
                <p>Sebagai Guide Kota</p>
                <p>Lokasi: Bali, Kabupaten Gianyar</p>
                <p>Durasi = 18 jam/hari</p>
                <p>Bahasa yang dikuasi:<br>
                -Indonesia<br>
                -Inggris</p>
                <p>Pengalaman: pengalaman yang pernah saya dapatkan yaitu saya pernah memandu wisatawan dari eropa, autralia, inggris, jepang dan masih banyak lagi lainnya. saya telah menjadi pemandu wisata dari tahun 1987, banyaknya pengalaman yang saya dapatkan dari wisatawan yang banyak bicara, wisatwan yang royal, wisatawan yang dikit bicara dan lain sebagainya. Namun hal tersebut tidak membuat saya patah semangat karena saya sangat suka berwisata serta saya sangat suka berbagi ilmu serta pengalamn saya kepada orang lain. Ayo berlancong ke bali bali, kalau bukan kita yang memperkenalkan bali mau siapa lagi?. Sekian pengalaman saya yang dapat saya paparkan. Semoga lancar semua pendapatannya para tour guide. </p>
                <p class="fw-bold">IDR 250.000/Hari || Max. 20 Orang </p>
                </div>
            </div>
            <div class="col-4">
                <div class="p-2 border bg-light">
                <img src="images/guide/tour.png" class="img-thumbnail w-100 h-100" alt="tour guide">
                <p class="fw-bold text-decoration-underline">Nyoman Madia</p>
                <p>Sebagai Guide Desa</p>
                <p>Lokasi: Bali, Kabupaten Tabanan</p>
                <p>Durasi = 18 jam/hari</p>
                <p>Bahasa yang dikuasi:<br>
                -Indonesia<br>
                -Inggris<br>
                -Jepang</p>
                <p>Pengalaman: pengalaman yang saya miliki sangat beragam dari saya belum bisa menjadi tour guide terbaik sampai saya bisa menjadi tour guide terbaik seperti ini. Pengalaman yang saya alami mungkin tidak jauh berbeda dengan tour guide lainnya, seperti halnya melayani wisatawan yang bawel, pendiam, serta yang sangat ramah. Namun pengalaman saya yang sangat berkesan yaitu disaat saya menjadi tour guide ada seorang wistawan yang memberikan saya pembayaran lebih, yang membuat saya berpikir apakah semua wisatawan baik seperti ini. Namun setelah banyaknya saya melayani tidak semua wisatawan yang baik seperti itu.</p>
                <p class="fw-bold">IDR 300.000/Hari || Max. 25 Orang </p>
                </div>
            </div>
            <div class="col-4">
                <div class="p-2 border bg-light">
                <img src="images/guide/tour.png" class="img-thumbnail w-100 h-100" alt="tour guide">
                <p class="fw-bold text-decoration-underline">Komang Nadia Utari</p>
                <p>Sebagai Guide Kota</p>
                <p>Lokasi: Bali, Kabupaten Badung</p>
                <p>Durasi = 18 jam/hari</p>
                <p>Bahasa yang dikuasi:<br>
                -Indonesia<br>
                -Inggris</p>
                <p>Pengalaman: pengalam yang saya miliki selama menjadi tour guide yaitu saya sangat senang job ini, saya bisa mengenal banyak wisatawan asing. Saya sangat santai dalam memandu wisatawan maka dari itu banyak nya wisatawan yang sangat menyukai saya sebagai tour guidenya. Sampainya terdapat wisatawan yang membelikan saya mobil yang dikarenakan saya dulu menggunakan mobil kecil untuk memandu wisatawan. Ini adalah pengalaman saya yang sangat berkesan dalam hidup saya. Rasa simpati dari seorang wisatawan sangat besar, padahal saya sendiri baru memandu dia hanya satu kali. Namun wisatawan tersebut telah mempercayai saya. Pesan saya jadilah orang baik, bertanggung jawab serta jujur, karena kpercayaan sulit dicari.</p>
                <p class="fw-bold">IDR 250.000/Hari || Max. 20 Orang </p>
                </div>
            </div>
      </div>
      </div>

      <section id="daftar">
      <div class="row justify-content-evenly">
          <div class="col-4">
          <h5 class="text-start">Syarat Pendaftaran Tour Guide</h5>
          <ul>
              <li> Laki-laki/perempuan berusia minimal 18 Tahun</li>
              <li> Memiliki pengalaman bekerja dibidang pariwisata</li>
              <li> Bersedia menjaga kelestarian pariwisata indonesia dan nama baik Tour Guide</li>
              <li> Memiliki smartphone dengan aspek yang dapat mengakses internet dengan baik</li>
          </ul> 
          <h5 class="text-start">Dokumen Yang Perlu Disiapkan</h5>
          <ul>
              <li> KTP</li>
              <li> CV (Opsional)</li>
              <li> Sertifikat profesi pemandu wisata</li>
              <li> Rekening Bank</li>
          </ul> 
          <p class="fst-italic">*semua dokumen yang perlu disiapkan dikirimkan lewat email</p>
          </div>
          <div class="col-4">
          <h2 class="text-center">Pendaftaran Tour Guide</h2> 
          <p class="text-center">Dibuka pendaftaran pemandu wisata untuk menjual layanan anda. <B>Ayo Daftar sebagai guide tour bali</B></p>
          <p class="fst-italic text-center">klik daftar sekarang untuk menuju ke email</p>
          <div class="d-grid gap-1 col-4 mx-auto">
              <button class="btn btn-primary center-block" type="button">Daftar Sekarang</button>
          </div>
          </div>
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
