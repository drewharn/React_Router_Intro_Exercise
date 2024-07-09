import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Snack1 from './components/Snack1';
import Snack2 from './components/Snack2';
import Snack3 from './components/Snack3';

function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={VendingMachine} />
                <Route exact path="/snack1" component={Snack1} />
                <Route exact path="/snack2" component={Snack2} />
                <Route exact path="/snack3" component={Snack3} />
            </Switch>
        </div>
    );
}

export default App;