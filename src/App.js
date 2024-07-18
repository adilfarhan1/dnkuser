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
function App() {
  const Auth = () => {
    const login = localStorage.getItem('login')
    return login ? <Outlet /> :<Navigate to="/admin"/>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/project-detail' element={<ProjectDetail />} />
        </Route>
        <Route element={<Auth />}>
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path='/dashboard/viewList' element={<ViewList />} />
            <Route path='/dashboard/addTeam' element={<AddTeam />} />
            <Route path='/dashboard/addproject'  element={<AddProject />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
