import AboutUs from '../views/pages/aboutUs';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Requirement from '../views/pages/requirements';
import TourGuide from '../views/pages/tour-guide';
import Wisata from '../views/pages/wisata';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/wisata': Wisata,
  '/tour-guide': TourGuide,
  '/about-us': AboutUs,
  '/requirement': Requirement,
  '/detail/:id': Detail,
};

export default routes;
