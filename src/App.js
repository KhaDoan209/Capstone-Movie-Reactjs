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
import 'antd/dist/reset.css';


export const history = createBrowserHistory();
function App() {
   return (
      <Router history={history}>
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
            <FormTemplate path='/login'
               component={Login} />
            <FormTemplate path='/registers'
               component={Register} />
            <AdminTemplateUser exact path='/admin/user'
               component={AdminUser} />
            <AdminTemplate exact path='/admin/user/adduser'
               component={AdminAddNewUser} />
            <AdminTemplate exact path='/admin/edituser/:id'
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
