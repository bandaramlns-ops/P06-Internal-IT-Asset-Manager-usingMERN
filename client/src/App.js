
import './App.css';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import User from './getuser/User';
import UserForm from './userform/userform';

const router = createBrowserRouter([
  {
    path: '/',
    element: <User />,
  },
  {
    path: '/adduser',
    element: <UserForm />,
  },
  {
    path: '/updateuser/:id',
    element: <UserForm />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
