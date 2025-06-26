import './App.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FindTalentPage from './Pages/FindTalentPage';
import FindJobsPage from './Pages/FindJobsPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';
import { getItem } from './Services/LocalStorageService';
import AppRoutes from './Pages/AppRoutes';

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: 'Poppins, sans-serif',
    primaryColor: "brightSun",
    primaryShade: 4,
    colors: {
      'brightSun': ['#fefce8', '#fffbc2', '#fff487', '#ffe643', '#ffd419', '#efb903', '#ce8f00', '#a46504', '#884f0b', '#734010', '#432105'],
      'mineShaft': ["#f6f6f6", "#e7e7e7", "#d1d1d1", "#b0b0b0", "#888888", "#6d6d6d", "#5d5d5d", "#4f4f4f", "#454545", "#3d3d3d", "#2d2d2d"]
    }
  })
  return (
    <Provider store={Store}>
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <Notifications position="top-center" zIndex={1000} />
      <AppRoutes />
    </MantineProvider>
    </Provider>
  );
}

export default App;
