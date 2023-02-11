import logo from './logo.svg';
import './App.css';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './template/HomeTemplate';
import ShowingMovies from './page/ShowingMovies/ShowingMovies';
import Home from './page/Home/Home';
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
               path='/'
               component={Home}
            />
         </Switch>
      </Router>
   );
}

export default App;
