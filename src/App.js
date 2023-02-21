import './App.css';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './template/HomeTemplate';
import Home from './page/Home/Home';
import AdminTemplate from './template/AdminTemplate';
import AdminFilm from './page/Admin/AdminFilm/AdminFilm';
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
