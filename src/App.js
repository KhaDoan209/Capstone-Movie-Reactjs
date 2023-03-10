import './App.css';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './template/HomeTemplate';
import Home from './page/Home/Home';
import AdminTemplate from './template/AdminTemplate';
import AdminFilm from './page/Admin/AdminFilm/AdminFilm';
import CreateFilm from './page/Admin/AdminFilm/CreateFilm';
import EditFilm from './page/Admin/AdminFilm/EditFilm';
import { FormTemplate } from './template/FormTemplate';
import AdminTemplateUser from './template/AdminTemplateUser';
import Login from './page/Login/Login';
import AdminUser from './page/Admin/AdminUser/AdminUser';
import AdminAddNewUser from './page/Admin/AdminUser/AdminAddNewUser';

import AdminEditUser from './page/Admin/AdminUser/AdminEditUser';
import Register from './page/Register/Register';
import Detail from './page/Detail/Detail';
import TicketRoom from './page/TicketRoom/TicketRoom';
import Tab_Profile from './page/Profile/Profile'
import Loading from './components/Loading/Loading';

export const history = createBrowserHistory();
function App() {
   return (
      <Router history={history}>

         <Loading />
         <Switch>
            <HomeTemplate
               path='/home'
               component={Home}
            />
            <AdminTemplate
               exact
               path='/admin-film'
               component={AdminFilm}
            />
            <AdminTemplate
               exact
               path='/admin-film/create-film'
               component={CreateFilm}
            />
            <AdminTemplate
               exact
               path='/admin-film/edit-film/:id'
               component={EditFilm}

            />
            <HomeTemplate path="/detail/:id" component={Detail} />
            <HomeTemplate path="/ticketroom/:id" component={TicketRoom} />
            <HomeTemplate path="/profile" component={Tab_Profile} />

            <FormTemplate path='/login'
               component={Login} />
            <FormTemplate path='/registers'
               component={Register} />
            <AdminTemplateUser exact path='/admin/user'
               component={AdminUser} />
            <AdminTemplateUser exact path='/admin/user/adduser'
               component={AdminAddNewUser} />
            <AdminTemplateUser exact path='/admin/edituser/:id'
               component={AdminEditUser} />
            <HomeTemplate
               path='/'
               component={Home}
            />
         </Switch>
      </Router>
   );
}

export default App;
