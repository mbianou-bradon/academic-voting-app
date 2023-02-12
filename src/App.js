import './App.css';

import { Outlet, createBrowserRouter, RouterProvider} from "react-router-dom"

import Login from './pages/Login';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import AdminLogin from "./pages/AdminLogin"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/Error';
import HowToVote from './pages/Howtovote';
import VotersPage from './pages/VotersPage';



const MyApp = () => {

  return (
    <div>
        <Navbar/>
          <div>
             <Outlet />
          </div>
        <Footer/>
    </div>
  )
}

const router = createBrowserRouter (
  [
    {
      element: <MyApp />,
      errorElement: <Error />,
      children: [ 
        { path: '/', element: <Login />,},
        { path: '/login/admin', element: <AdminLogin />},
        { path: '/login/forgot_password', element: <ForgotPassword />},
        { path: '/about', element: <AboutUs />},
        { path: '/contact', element: <Contact />},
        { path: '/how-to-vote', element: <HowToVote />},
        { path: '/signup', element: <SignUp />},
        { element: <VotersPage />,
          children: [
            { path: '/votersPage', element: <VotersPage/>},
            { path: '/votersPage/election', element: <VotersPage/>},
            { path: '/votersPage/vote-result', element: <VotersPage/>},
          ]
        }
      ]
    }
  ]
)

function App() {
  return (
    <div className="App text-slate-800 max-w-[85rem] mx-auto [&_*]:transition-all [&_*]:ease-linear [&_*]:duration-200">
     <RouterProvider router = {router} />
    </div>
  );
}

export default App;
