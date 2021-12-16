import $ from 'jquery';
import WisataDbSource from '../../data/wisatadb-source';
import UrlParser from '../../routes/url-parser';
import { createWisataDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="mainContent">
          <div id="detail">
            

            
          </div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await WisataDbSource.detailWisata(url.id);
    const movieContainer = document.querySelector('#detail');
    movieContainer.innerHTML = createWisataDetailTemplate(movie);
    // console.log(movie);

    $(document).ready(() => {
      $('.testimonial .indicators li').click(function () {
        const i = $(this).index();
        const targetElement = $('.testimonial .tabs li');
        targetElement.eq(i).addClass('active');
        targetElement.not(targetElement[i]).removeClass('active');
      });
      $('.testimonial .tabs li').click(function () {
        const targetElement = $('.testimonial .tabs li');
        targetElement.addClass('active');
        targetElement.not($(this)).removeClass('active');
      });
    });
    $(document).ready(() => {
      $('.slider .swiper-pagination span').each(function (i) {
        $(this).text(i + 1).prepend('0');
      });
    });
  },
};

export default Detail;
