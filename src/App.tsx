import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {NotFound} from './components/NotFound.tsx';
import Home from './pages/home/Home.tsx';

const routes = [
  {path: '', element: <Home/>},
  {path: '*', element: <NotFound/>},
];

const router = createBrowserRouter(routes, {basename: '/app-base'});

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
