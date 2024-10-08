import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {Layout} from './component/layout/Layout'
import Home from './component/pages/home/Home';
import About from './component/pages/about/About';
import Team from './component/pages/team/Team';
import ProjectDetail from './component/pages/projectDetail/ProjectDetail';
import Admin from './component/pages/login/Admin';
import DashboardLayout from './component/pages/dashboard/DashboardLayout';
import AddTeam from './component/pages/dashboard/component/AddTeam';
import AddProject from './component/pages/dashboard/component/AddProject';
import ViewList from './component/pages/dashboard/component/ViewList';
import DashboardHome from './component/pages/dashboard/component/DashboardHome';
import Contact from './component/pages/contact/Contact';
import TeamViewList from './component/pages/dashboard/component/TeamViewList';
import TeamDetail from './component/pages/team/TeamDetail';
import BuyProject from './component/pages/projectDetail/BuyProject';
import OurServices from './component/pages/ourService/OurServices';
import CareerPage from './component/pages/career/CareerPage';
import ScrollViewTop from './hooks/ScrollViewTop';
import OffPlanProject from './component/pages/projectDetail/OffPlanProject';
import AddAdImage from './component/pages/dashboard/component/AddAdImage';
import SellProject from './component/pages/projectDetail/SellProject';
import ReviewAdd from './component/pages/dashboard/component/ReviewAdd';
import AddPartner from './component/pages/dashboard/component/AddPartner';


function App() {
  const Auth = () => {
    const login = localStorage.getItem('login')
    return login ? <Outlet /> :<Navigate to="/admin"/>
  }
  return (
    <BrowserRouter>
      <ScrollViewTop />
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/project-detail/:id' element={<ProjectDetail />} />
          <Route path='/team-detail/:id' element={<TeamDetail />} />
          <Route path='/buy-project' element={<BuyProject />} />
          <Route path='/off-plan-project' element={<OffPlanProject />} />
          <Route path='/sell-project' element={<SellProject />} />
          <Route path='/services' element={<OurServices />} />
          <Route path='/careers' element={<CareerPage />} />
        </Route>
        <Route element={<Auth />}>
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path='/dashboard/viewList' element={<ViewList />} />
            <Route path='/dashboard/addTeam' element={<AddTeam />} />
            <Route path='/dashboard/addproject' element={<AddProject />} />
            <Route path='/dashboard/team' element={<TeamViewList />} />
            <Route path='/dashboard/ad' element={<AddAdImage />} />
            <Route path='/dashboard/review' element={<ReviewAdd />} />
            <Route path='/dashboard/partner' element={<AddPartner />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
