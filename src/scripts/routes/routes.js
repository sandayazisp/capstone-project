import AboutUs from '../views/pages/aboutUs';
import Home from '../views/pages/home';
import TourGuide from '../views/pages/tour-guide';
import Wisata from '../views/pages/wisata';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/wisata': Wisata,
  '/tour-guide': TourGuide,
  '/about-us': AboutUs,
};

export default routes;
