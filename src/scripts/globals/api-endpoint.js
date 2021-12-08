import CONFIG from './config';

const API_ENDPOINT = {
  WISATA: `${CONFIG.BASE_URL}api-wisata_bali.json`,
  DETAIL: (id) => `${CONFIG.BASE_URL}api-wisata_bali.json/${id}`,
};

export default API_ENDPOINT;
