import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.less';
import Home from "./pages/home/home";

import NotFoundPage from "./components/notFoundPage/notFoundPage";
import ErrorHandler from "./components/errorHendler/errorHandler";
import MoviesList from "./components/moviesLists/moviesList/moviesList";
import FilmForGenres from "./pages/filmForGanres/filmForGenres";


function App() {
    return (
        <div className="cinema">
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route exact={true} path="/genres" render={(props) => (
                        <FilmForGenres {...props} />
                    )}/>
                    <Route path="/error" render={(props) => (
                        <ErrorHandler error={props}/>
                    )}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
