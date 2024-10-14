import search from '@assets/icons/search.png';
import home from '@assets/icons/home.png';
import tvShow from '@assets/icons/tvShow.png';
import movies from '@assets/icons/movies.png';
import genres from '@assets/icons/genres.png';
import watchLater from '@assets/icons/watchLater.png';

export const mainMenuItems = [
    {
        title: 'Search',
        icon: <img src={search} alt="Search Icon" />,
        path: '/search',
    },
    {
        title: 'Home',
        icon: <img src={home} alt="Home Icon" />,
        path: '/home',
    },
    {
        title: 'TV Shows',
        icon: <img src={tvShow} alt="TV Shows Icon" />,
        path: '/tv-shows',
    },
    {
        title: 'Movies',
        icon: <img src={movies} alt="Movies Icon" />,
        path: '/movies',
    },
    {
        title: 'Genres',
        icon: <img src={genres} alt="Genres Icon" />,
        path: '/genres',
    },
    {
        title: 'Watch Later',
        icon: <img src={watchLater} alt="Watch Later Icon" />,
        path: '/watch-later',
    },
];

export const additionalMenuItems = [
    {
        title: 'Language',
        path: '/language', 
    },
    {
        title: 'Help',
        path: '/help', 
    },
    {
        title: 'Exit',
        path: '/exit', 
    },
];
