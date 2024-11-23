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
                <div className="bg-gray-800 absolute top-0 right-0 left-0 flex justify-center space-x-4 text-6xl p-5">
                    <h3 className="text-3xl font-bold text-gray-600">Assignment 2</h3>
                    <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" to="/">
                        Timers
                    </Link>
                    <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" to="/add">
                        Add
                    </Link>
                </div>
            </div>

            <TimersContextProvider>
                <Outlet />
            </TimersContextProvider>
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
