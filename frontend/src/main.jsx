import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './components/Main'; // Importing the Main component
import Themenseite1 from './pages/Themenseite1';
import Themenseite2 from './pages/Themenseite2';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Main />,
            },
            {
                path: '/Themenseite1',
                element: <Themenseite1 />,
            },
            {
                path: '/Themenseite2',
                element: <Themenseite2 />,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);