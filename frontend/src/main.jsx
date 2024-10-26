import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
// import Outlet from './components/outlet'; 
import Themenseite1 from './pages/Themenseite1';
import Themenseite2 from './pages/Themenseite2';
import './index.css';
import Ueber_uns from './pages/ueber_uns';
import Jobs from './pages/jobs';
import Home from './pages/home';
import Elektroinstallation from './pages/elektroinstallation';



// const initApp = () => { 
//     const hamburgerBtn = document.getElementById('hamburger-btn')
//     const mobileMenu = document.getElementById('mobile-menu')

//     const toggleMenu = () => {
//         mobileMenu.classList.toggle('hidden')
//         mobileMenu.classList.toggle('flex')
//         hamburgerBtn.classList.toggle('toggle-btn')
//     }

//     hamburgerBtn.addEventListener('click', toggleMenu) 
//     mobileMenu.addEventListener('click', toggleMenu)
// }    
//     document.addEventListener('DOMContentLoaded', initApp)






const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/Themenseite1',
                element: <Themenseite1 />,
            },
            {
                path: '/Themenseite2',
                element: <Themenseite2 />,
            },
            {
                path: '/ueber-uns',
                element: <Ueber_uns />,
            },
            {
                path: '/offene-stellen',
                element: <Jobs />,
            },
            {
                path: '/elektroinstallation',
                element: <Elektroinstallation />,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);