import './App.css';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './template/HomeTemplate';
import { FormTemplate } from './template/FormTemplate';
import ShowingMovies from './page/ShowingMovies/ShowingMovies';
import Home from './page/Home/Home';
import Detail from './page/Detail/Detail';
import TicketRoom from './page/TicketRoom/TicketRoom';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import AdminTemplate from './template/AdminTemplate';
import AdminFilm from './page/Admin/AdminFilm/AdminFilm';
import AdminUser from './page/Admin/AdminUser/AdminUser';
import CreateFilm from './page/Admin/AdminFilm/CreateFilm';
import EditFilm from './page/Admin/AdminFilm/EditFilm';

export const history = createBrowserHistory();
function App() {
   return (
      <Router history={history}>
         <Switch>
            <HomeTemplate
               path='/home'
               component={Home}
            />
            <HomeTemplate
               path='/showing-movie'
               component={ShowingMovies}
            />
            <HomeTemplate
               path='/detail/:id'
               component={Detail}
            />

            <HomeTemplate
               path='/ticketroom/:id'
               component={TicketRoom}
            />

            <FormTemplate
               path='/login'
               component={Login}
            />
            <FormTemplate
               path='/registers'
               component={Register}
            />

            <AdminTemplate
               path='/admin-user'
               component={AdminUser}
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
            <HomeTemplate
               path='/'
               component={Home}
            />
         </Switch>
      </Router>
   );
}

export default App;
