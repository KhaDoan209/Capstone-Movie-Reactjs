import './App.css';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './template/HomeTemplate';
import ShowingMovies from './page/ShowingMovies/ShowingMovies';
import Home from './page/Home/Home';
import AdminFilm from './page/Admin/AdminFilm';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import Header from './components/Header';

import Admin from './page/Admin/Admin';
import { FormTemplate } from './template/FormTemplate';


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
             <FormTemplate  path='/login'
               component={Login}/>
                <FormTemplate  path='/registers'
               component={Register}/>
           
            <HomeTemplate
               path='/'
               component={Home}
            />
            
           
         </Switch>
      </Router>
   );
}

export default App;
