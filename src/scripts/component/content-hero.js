class ContentHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="content-hero">
        <!-- Carousel -->
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
    
            <!-- Indicators/dots -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>                
            </div>

            <div class="container position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 p-3 text-white w-50 d-flex align-items-center justify-content-center flex-column">
                <h1>Welcome To</h1>
                <h1 class="text-md-start">BALI</h1>
                <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. At fuga est doloremque asperiores, minus repudiandae quia vel officia dolor eveniet, amet optio iste aliquam eum delectus perspiciatis beatae autem omnis.</p>
                <button type="button" class="btn btn-outline-warning">Requirements</button>               
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
      `;
  }
}

customElements.define('content-hero', ContentHero);
