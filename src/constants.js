import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects';
import CV from './components/CV';

const PAGES = [
    {
        id: 'home',
        name: 'Home',
        link: '/home',
        component: <Home />
        /* icon: ____ */
    },
    {
        id: 'about',
        name: 'About',
        link: '/about',
        component: <About />
        /* icon: ____*/
    },
    /*({
        id: 'blog',
        name: 'Blog',
        link: '/blog',
        component: <Blog />
         icon: ____ 
    }*/
    {
        id: 'projects',
        name: 'Projects',
        link: '/projects',
        component: <Projects />
        /* icon: ____ */
    }
];

const BASE_URL = 'https://www.mlee43.me';

export {PAGES};