
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';

function App() {
  return (
    <div>

     <BrowserRouter>
            <Switch>

                <Route exact path="/">
                  <Home></Home>
                </Route>

                <Route exact path="*">
                  <Notfound></Notfound>
                </Route>

            </Switch>
     </BrowserRouter>

    </div>
  );
}

export default App;
