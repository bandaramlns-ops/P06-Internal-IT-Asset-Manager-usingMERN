import './App.css';
import User from './getuser/User';
import AddUser from './adduser/adduser';
import createBrowserRouter, { RouterProvider } from 'react-router-dom';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',

      element: <User />,
    },  
    {
      path: '/adduser',
      element: <AddUser />, 
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={route} /> 
    </div>
  );
}

export default App;
