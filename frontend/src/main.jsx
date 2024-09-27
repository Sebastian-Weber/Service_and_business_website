import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Outlet from './components/outlet'; 
import Themenseite1 from './pages/Themenseite1';
import Themenseite2 from './pages/Themenseite2';
import './index.css';
import Ueber_uns from './pages/ueber_uns';
import Jobs from './pages/jobs';
import Home from './pages/home';


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
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);