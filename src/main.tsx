import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Link, Outlet, RouterProvider, createHashRouter } from 'react-router-dom';

import './index.css';
import TimersContextProvider from './components/context/TimersContextProvider';
import AddView from './views/AddView';
import TimersView from './views/TimersView';

const PageIndex = () => {
    return (
        <>
            <div className="bg-gray-800 mx-auto px-6 py-3 flex items-center">
                <div className="flex space-x-4">
                    <h1 className="text-3xl font-bold text-white">Assignment 2</h1>
                    <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" to="/">
                        Timers
                    </Link>
                    <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" to="/add">
                        Add
                    </Link>
                </div>
            </div>
            <div>
                <TimersContextProvider>
                    <Outlet />
                </TimersContextProvider>
            </div>
        </>
    );
};

const router = createHashRouter([
    {
        path: '/',
        element: <PageIndex />,
        children: [
            {
                index: true,
                element: <TimersView />,
            },
            {
                path: '/add',
                element: <AddView />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
