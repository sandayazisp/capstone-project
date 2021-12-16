import CONFIG from './config';

const API_ENDPOINT = {
  WISATA: `${CONFIG.BASE_URL}api-wisata_bali`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/${id}`,
};

export default API_ENDPOINT;
