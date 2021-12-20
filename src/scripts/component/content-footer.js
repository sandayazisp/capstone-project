class ContentFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="py-3 bg-dark">
    <div class="container">        
        <p class="text-center text-muted w-75 m-auto border-bottom pb-3 mb-3 fst-italic">Tour kami akan memberikan kesempatan yang lebih besar untuk mempelajari budaya, seni, agama, kehidupan tradisional dan keindahan alam yang fantastis dari sisi pedesaan Bali dan pulau-pulau terdekat.</p>        
        <p class="text-center text-white fw-lighter">Copyright © 2021 - Mai.Tour</p>
    </div>     
</footer>   
      `;
  }
}

customElements.define('content-footer', ContentFooter);
