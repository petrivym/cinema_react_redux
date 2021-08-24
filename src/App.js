import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.less';
import Home from "./pages/home/home";
import MoviesList from "./components/moviesList/moviesList";
import NotFoundPage from "./components/notFoundPage/notFoundPage";
import ErrorHandler from "./components/errorHendler/errorHandler";


function App() {
    return (
        <div className="cinema">
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route exact={true} path="/film/:id" render={(props) => (
                        <MoviesList {...props} />
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
