import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";
import VideoList from "./VideoList";
import Video from "./Video";
import history from "../history";

const App = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <Search />

            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={VideoList} />
                    <Route path="/videos/:id" exact component={Video} />
                </Switch>

            </Router>
        </div>
    );
}

export default App;