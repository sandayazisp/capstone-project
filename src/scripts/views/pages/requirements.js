const Requirement = {
  async render() {
    return `        
        <div id="mainContent">
          <div id="requirement">
            <div class="container pt-5">
              <h1 class="text-center pt-2 pb-3">Peraturan COVID saat bepergian ke Bali</h1>
              <p>Liburan ke Bali sudah diperbolehkan untuk wisatawan dalam negeri atau WNI sejak 31 Juli 2020 lalu. Tentunya pada
                  masa pandemi seperti saat ini, bepergian menggunakan transportasi udara, laut, maupun darat baik pribadi atau
                  umum diperbolehkan dengan menjaga protokol kesehatan yang diberlakukan serta memenuhi syarat-syarat yang telah
                  ditentukan oleh pemerintah.</p>
              <p>Sebagai kota yang juga menjadi salah satu destinasi liburan favorit di dunia, wisatawan mancanegara pun tak sabar
                  untuk bisa berkunjung ke Pulau Dewata Bali. Berikut telah Wego rangkum syarat-syarat yang diperlukan bagi WNI
                  maupun WNA yang ingin berkunjung ke Bali!</p>
          
              <h3 class="pb-2">Syarat Masuk Bali untuk WNI</h3>
              <img src="images/wni.webp" class="img-fluid" alt="Pantai Melasti">
              <p class="pt-3">Berdasarkan pengumuman terbaru pada Selasa, 5 Oktober 2021 lalu, semua kota dan kabupaten di Jawa
                  dan Bali sudah berada di PPKM level 3 dan 4.</p>
              <p>Penumpang berusia di bawah 18 tahun yang melakukan perjalanan ke Bali tetap diwajibkan mengikuti persyaratan
                  dokumen yang berlaku sesuai daerah tujuan, lalu ntuk penumpang berusia di bawah 12 tahun sementara ini masih
                  dilarang melakukan penerbangan domestik.</p>
              <p>Untuk penumpang dengan kepentingan khusus yang tidak atau belum divaksin karena alasan medis sesuai surat
                  keterangan dokter dari Rumah Sakit Pemerintah, dapat menunjukkan surat keterangan hasil negatif tes RT-PCR atau
                  Rapid Antigen sesuai ketentuan destinasi tujuan.</p>
              <p class="note note-primary">
                  <strong>Perlu diperhatikan</strong>: Hasil Negatif tes COVID-19 wajib diterbitkan oleh Fasilitas Pelayanan
                  Kesehatan (fasyankes) yang disebutkan dalam Keputusan MENKES RI (lihat daftarnya&nbsp;<a
                      href="https://www.litbang.kemkes.go.id/laboratorium-pemeriksa-covid-19/"><b>di sini</b></a>) dan penumpang
                  harus memastikan bahwa hasil tes di&nbsp;<i>upload</i>&nbsp;ke sistem eHAC terintegrasi ke aplikasi
                  PeduliLindungi oleh fasyankes terkait (unduh aplikasi PeduliLindungi di&nbsp;<a
                      href="https://play.google.com/store/apps/details?id=com.telkom.tracencare"><b>Android</b></a>&nbsp;dan&nbsp;<a
                      href="https://apps.apple.com/id/app/pedulilindungi/id1504600374"><b>iOS</b></a>).
              </p>
              <h5><strong>Syarat Perjalanan Dari Pulau Jawa ke Pulau Bali (dan sebaliknya) </strong>:</h5>
              <ul class="list-style">
                  <li>Wajib menunjukkan kartu vaksin minimal dosis pertama</li>
                  <li>Tes PCR negatif berlaku 2 x 24 jam.</li>
                  <li>Tes Antigen negatif berlaku 1 x 24 jam (hanya berlaku jika memiliki sertifikat vaksin dosis kedua)</li>
                  <li>Surat keterangan hasil negatif tes RT-PCR/Rapid Antigen harus dilengkapi dengan <i>barcode/</i>
                      <i>QRCode</i></li>
                  <li>Catatan: Hasil tes Rapid Antigen hanya berlaku <u>jika</u> penumpang memiliki sertifikat vaksin dosis kedua,
                      jika hanya memiliki sertifikat vaksin dosis pertama maka hasil tes COVID-19 yang berlaku adalah hasil tes
                      RT-PCR.</li>
              </ul>
              <h5><strong>Syarat Perjalanan Dari/Ke Pulau Bali (selain Pulau Jawa) </strong>:</h5>
              <ul class="list-style">
                  <li>Wajib menunjukkan kartu vaksin minimal dosis pertama</li>
                  <li>Tes PCR negatif berlaku 2 x 24 jam.</li>
                  <li>Tes Antigen tidak berlaku, kecuali jika diizinkan oleh KKP bandara keberangkatan dan dilengkapi sertifikat
                      vaksin COVID-19 dosis lengkap (dosis kedua)<b>. </b>Jika KKP bandara keberangkatan mengizinkan, maka tes
                      antigen berlaku 1 x 24 jam.</li>
                  <li>Surat keterangan hasil negatif tes RT-PCR harus dilengkapi dengan <i>barcode/</i> <i>QRCode</i></li>
                  <li>Peserta vaksin di Bandar Udara Internasional I Gusti Ngurah Rai (DPS) Bali tidak dapat terbang di hari yang
                      sama dengan vaksinasi</li>
                  <li>Penumpang yang pernah terpapar COVID-19 tiga bulan terakhir dapat membawa Surat Keterangan Penyintas
                      COVID-19 sebagai referensi tidak dapat vaksinasi</li>
                  <li>Khusus keberangkatan dari Bali ke daerah asal penumpang: WNA yang berangkat dari Bali dengan tujuan
                      internasional melalui penerbangan domestik dan transit tidak lebih dari 24 jam di bandara transit, tidak
                      wajib menunjukkan kartu vaksinasi</li>
              </ul>
          
              <h3 class="pb-2">Syarat Masuk Bali untuk WNA</h3>
              <img src="images/wna.webp" class="img-fluid" alt="Pantai Penida">
              <p class="pt-3">Selama masa PPKM, Bali ditutup untuk kunjungan wisatawan asing. Namun pada 14 Oktober 2021
                  pemerintah telah membuka perjalanan bagi WNA untuk masuk bali dengan ketentuan yang berlaku. Menurut situs
                  CovidControl, semua wisatawa internasional hanya dpat masuk ke Indoneisa melalui Bali ( Bandara International
                  Ngurah Rai) dan Kepulauan Riau ( Bandra Internasional Raja Haji Fisabillah).</p>
              <p>Pembukaan bali pada 14 Oktober 2021 lalu, Indonesia hanya mengizinkan 19 negara yang dipilih sesuai standar Badan
                  Kesehatan Dunia (WHO) karena angka kasus terkonfirmasi Covid-19nya berada pada level 1 dan 2 dengan angka
                  positivity rate yang rendah. Negara yang diizinkan tersebut yaitu Saudi Arabia, United Arab Emirates, Selandia
                  Baru, Kuwait, Bahrain, Qatar, China, India, Jepang, Korea Selatan, Liechtenstein, Italia, Prancis, Portugal,
                  Spanyol, Swedia, Polandia, Hungaria, dan Norwegia.</p>
              <h5><strong>Persyaratan Dokumen dan Protokol Kesehatan </strong>:</h5>
              <ul class="list-style">
                  <li>Menunjukkan hasil negatif melalui tes RT-PCR di negara asal yang diambil dalam kurun waktu maksimal 3 x 24
                      jam sebelum keberangkatan dan dilampirkan saat pemeriksaan kesehatan atau e-HAC Internasional Indonesia
                      melalui aplikasi PeduliLindungi (download di&nbsp;<a
                          href="https://play.google.com/store/apps/details?id=com.telkom.tracencare"><strong>Android</strong></a>&nbsp;/&nbsp;<a
                          href="https://apps.apple.com/id/app/pedulilindungi/id1504600374"><strong>iOS</strong></a>)</li>
                  <li>Menunjukkan&nbsp;kartu sertifikat vaksinasi COVID-19 lengkap (seluruh dosis) sebagai bukti telah menerima
                      vaksin Covid-19 dosis lengkap minimal 14 hari sebelum keberangkatan. Kartu atau sertifikat vaksin harus
                      berbahasa Inggris, selain bahasa asal</li>
                  <li>Pelaku perjalanan wajib menggunakan penerbangan langsung (direct flight) dari negara asalnya</li>
                  <li>Jika WNA dengan kondisi komorbid wajib menunjukkan surat keterangan dari Rumah Sakit Pemerintah negara
                      keberangkatan, dalam Bahasa Inggris selain bahasa asal negaranya.</li>
                  <li>Bagi WNA wajib menunjukkan&nbsp;bukti kepemilikan asuransi kesehatan/asuransi perjalanan yang mencakup
                      pembiayaan kesehatan dengan nilai pertanggungan minimal 100.000 dolar Amerika Serikat (AS) atau sekitar Rp
                      1,4 miliar dalam melakukan karantina dan pengobatan jika terpapar COVID-19</li>
                  <li>Pada saat kedatangan, dilakukan tes molekular isotermal (NAAT/jenis lainnya) atau tes RT-PCR bagi pelaku
                      perjalanan internasional dan&nbsp;diwajibkan menjalani karantina terpusat selama 5 x 24 jam</li>
                  <li>Pada hari ke-7 karantina, bagi WNI dan WNA dilakukan pemeriksaan ulang RT-PCR</li>
                  <li>Jika WNA belum mendapat vaksin di negara asal akan divaksinasi di tempat karantina setibanya di Indonesia
                      setelah dilakukan pemeriksaan RT-PCR kedua dengan hasil negatif</li>
              </ul>
              <h5><strong>Hotel Karantina Wisman di Bali </strong>:</h5>
              <p>Berdasarkan Buku Panduan Penanganan Wisatawan per 14 Oktober 2021, terdapat 35 hotel karantina di Bali yang bisa
                  disewa wisman. Puluhan hotel ini sudah diverifikasi pemerintah, sehingga aman dan nyaman menjadi hotel
                  karantina. Berikut daftar 35 hotel karantina untuk WNA di Bali.</p>
              <ul class="list-unstyled">
                  <li>Kota Denpasar :</li>
                  <ul>
                      <li>Hyatt Regency</li>
                      <li>Griya Santrian</li>
                      <li>Taksu Sanur Hotel</li>
                      <li>Tandjung Sari</li>
                      <li>Prime Plaza Suites Sanur</li>
                      <li>Swiss Balresort Watu Jimbaran</li>
                      <li>Grand Hyatt Bali</li>
                  </ul>
                  <li class="pt-3">Kabupaten Gianyar :</li>
                  <ul>
                      <li>Maya Uud Resort & Spa</li>
                      <li>The Westin Resort & Spa Ubud</li>
                      <li>The Ubud Village Resort</li>
                      <li>The Ubud Village Hotel</li>
                      <li>The Sankara Resort & Spa Ubud by Pramana</li>
                      <li>The Royal Pitamaha</li>
                      <li>Komaneka Resorts</li>
                      <li>Viercy Bali Luxury Resort</li>
                      <li>The Payogan Villa Resort and Spa</li>
                  </ul>
                  <li class="pt-3">Kabupaten Badung :</li>
                  <ul>
                      <li>Malia Bali</li>
                      <li>Nusa Dua Beach</li>
                      <li>The Westin Nusa Dua</li>
                      <li>The Laguna A Luxury Collection</li>
                      <li>Courtyard By Marriot Nusa Dua</li>
                      <li>The Mulia Resort & Villa Bali</li>
                      <li>Hilton Bali Resort</li>
                      <li>Ritz Carlton Bali</li>
                      <li>Conrad Nusa Dua</li>
                      <li>Sol by Melia Nusa Dua</li>
                      <li>Merusaka Nusa Dua</li>
                      <li>Novotel Bandara Ngurah Rai</li>
                      <li>Aston Kuta Hotel & Residence</li>
                      <li>Swiss Belhotel Tuban</li>
                      <li>Bali Dynast Resort</li>
                      <li>Fairfield By Marriot Bali Kuta Sunset Road</li>
                      <li>Hilton Garden Inn Bali Ngurah Rai Airport</li>
                      <li>Harper Kuta Bali</li>
                      <li>Ramada By Wyndharm Bali Sunset Road Kuta</li>
                  </ul>
              </ul>
              <p>Berikut adalah syarat-syarat masuk ke Bali untuk wisatawan dalam negeri dan wisatawan luar negeri. Selain wajib
                  memenuhi syarat yang berlaku, penting untuk kita selalu menjaga diri sendiri dengan cara menerapkan protokol
                  kesehatan 5M yaitu memakai masker, menjaga jarak, mencuci tangan, menjauhi kerumunan, dan mengurangi mobilitas.
                  Bersama-sama menerapkan protokol kesehatan kita dapat menjaga diri sendiri dan juga mencegah penularan virus
                  kepada orang-orang terdekat. </p>
          
              <p class="note note-light">
                  <strong>Hal Penting untuk Diketahui :</strong>
                  Demi perjalanan yang lancar dan nyaman, pastikan untuk memenuhi semua persyaratan di kota atau negara asal,
                  tujuan, dan transit. Halaman ini juga diperbarui secara berkala, berdasarkan surat edaran resmi dari pemerintah.
                  Karena itu, muat ulang halaman secara berkala untuk melihat info terkini. Namun, mohon diingat bahwa peraturan
                  dapat berubah sewaktu-waktu dan mungkin mempengaruhi kondisi di lapangan.
              </p>
          
            </div>            
          </div>
        </div>

      `;
  },

  async afterRender() {
    // afterRender
  },
};

export default Requirement;
