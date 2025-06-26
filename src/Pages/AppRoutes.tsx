import HomePage from '../Pages/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FindTalentPage from '../Pages/FindTalentPage';
import FindJobsPage from '../Pages/FindJobsPage';
import TalentProfilePage from '../Pages/TalentProfilePage';
import PostJobPage from '../Pages/PostJobPage';
import JobDescPage from '../Pages/JobDescPage';
import ApplyJobPage from '../Pages/ApplyJobPage';
import CompanyPage from '../Pages/CompanyPage';
import PostedJobPage from '../Pages/PostedJobPage';
import JobHistoryPage from '../Pages/JobHistoryPage';
import SignUpPage from '../Pages/SignUpPage';
import ProfilePage from '../Pages/ProfilePage';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Divider } from '@mantine/core';
import { useSelector } from 'react-redux';
import ProtectedRoute from '../Services/ProtectedRoute';
import PublicRoute from '../Services/PublicRoute';

const AppRoutes = () => {
    const user = useSelector((state: any) => state.user);
    return <BrowserRouter
        // Add the future prop here
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
      <div className='relative'>
      <Header />
      <Divider size="xs" mx="md" />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/find-jobs' element={<FindJobsPage/>} />
        <Route path='/jobs/:id' element={<JobDescPage/>} />
        <Route path='/apply-job/:id' element={<ApplyJobPage/>} />
        <Route path='/find-talent' element={<FindTalentPage/>} />
        <Route path='/company/:name' element={<CompanyPage/>} />
        <Route path='/job-history' element={<ProtectedRoute allowedRoles={["APPLICANT"]}><JobHistoryPage/></ProtectedRoute>} />
        <Route path='/talent-profile/:id' element={<TalentProfilePage/>} />
        <Route path='/posted-job/:id' element={<ProtectedRoute allowedRoles={["EMPLOYER"]}><PostedJobPage/></ProtectedRoute>} />
        <Route path='/post-job/:id' element={<ProtectedRoute allowedRoles={["EMPLOYER"]}><PostJobPage/></ProtectedRoute>}></Route>
        <Route path='/signup' element={<PublicRoute><SignUpPage/></PublicRoute>}></Route>
        <Route path='/login' element={<PublicRoute><SignUpPage/></PublicRoute>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='*' element={<HomePage/>} />
      </Routes>
      <Footer />
      </div>
      </BrowserRouter>
}

export default AppRoutes;