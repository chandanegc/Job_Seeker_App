import { useNavigate, Outlet, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';
import { useState, createContext, useContext } from 'react';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const DashboardContext = createContext();

export const loader = async()=>{
  try {
    const {data} = await customFetch.get('/user/current-user');
    return data;
  } catch (error) {
    console.log(error);
    return redirect("/");
  }
};



const Dashboard = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const {user} = data;
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch("/auth/logout");
    toast.success("Loggin out...");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar/>
            <div className='dashboard-page'>
              <Outlet context={data} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;