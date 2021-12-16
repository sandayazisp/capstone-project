import API_ENDPOINT from '../globals/api-endpoint';

class WisataDbSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.WISATA);
    const responseJson = await response.json();
    return responseJson.recomended_wisata;
  }

  static async guide() {
    const response = await fetch(API_ENDPOINT.WISATA);
    const responseJson = await response.json();
    return responseJson.guide;
  }

  static async wisata() {
    const response = await fetch(API_ENDPOINT.WISATA);
    const responseJson = await response.json();
    return responseJson.wisata_bali;
  }

  static async detailWisata(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.wisata_bali;
  }
}

export default WisataDbSource;
