import { createBrowserRouter , RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  Stats,
  AddJob,
  Admin,
  Profile,
  AllJobs,
  EditJob
} from './pages';
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction} from "./pages/Login";
import { loader as DashboardLoader } from "./pages/DashboardLayout";
import { action as Addjob } from "./pages/AddJob";
import {loader as allJobsloader} from "./pages/AllJobs";

import { loader as editJobLoader } from './pages/EditJob';
import { action as editJobAction } from './pages/EditJob';
import { action as deleteJobAction } from './pages/DeleteJob';

import { loader as adminLoader } from './pages/Admin';
import { action as profileAction } from './pages/Profile';
import { loader as statsLoader } from './pages/Stats';


const router = createBrowserRouter([
  {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action:RegisterAction
      },
      
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader:DashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action:Addjob
          },
          { path: 'stats',
            element: <Stats />,
            loader: statsLoader
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader:allJobsloader,
          },

          {
            path: 'profile',
            element: <Profile />,
            action:profileAction
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob/>,
            loader: editJobLoader,
            action: editJobAction,
          },
          { 
            path: 'delete-job/:id',
            action: deleteJobAction 
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
        action:LoginAction
      },
    ],
  },
]);
const App = () => {
  const checkDefaultTheme = () => {
    const isDarkTheme =
      localStorage.getItem('darkTheme') === 'true'
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
  };
  
  const isDarkThemeEnabled = checkDefaultTheme();
  return <>
  <RouterProvider router={router}/>
  </>
  
}

export default App