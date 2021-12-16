class ContentFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="py-3 bg-dark">
    <div class="container">        
        <p class="text-center text-muted w-75 m-auto border-bottom pb-3 mb-3 fst-italic">Our tour will give a larger opportunity to learn the culture, arts, religion, traditional life and the fantastic natural beauty of the surrounding country-side of Bali and the nearby islands.</p>        
        <p class="text-center text-white fw-lighter">Copyright © 2021 - Mai.Tour</p>
    </div>     
</footer>   
      `;
  }
}

customElements.define('content-footer', ContentFooter);
