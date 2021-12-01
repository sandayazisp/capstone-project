/* eslint-disable no-shadow */
import $ from 'jquery';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top p-4">
        <div class="container d-flex">
            <a class="navbar-brand" href="#"><img class="" src="icons/MAI.TOUR.png" alt="" srcset=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#/home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#/wisata">Wisata</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#/tour-guide">Tour Guide</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#/about-us">About Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    $(document).ready(($) => {
      $(window).scroll(() => {
        if ($(document).scrollTop() > 50) {
          // Navigation Bar
          $('.navbar').addClass('bg-nav');
        } else {
          $('.navbar').removeClass('bg-nav');
        }
      });
    });

    $('.navbar-toggler-icon').click(() => {
      $('.navbar').toggleClass('bg-nav');
    });
  }
}

customElements.define('app-bar', AppBar);
