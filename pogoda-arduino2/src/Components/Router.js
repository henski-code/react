import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Temperatury from './Temperatury';
import Cisnienie from './Cisnienie';
import Wilgotnosc from './Wilgotnosc';
import About from './About';
import base from '../base';
import '../style.css';

class Router extends React.Component {

    state ={
        odczyty:{}
    }

    componentDidMount(){
        this.ref=base.syncState('/', {
            context: this,
            state: 'odczyty'
          });
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    render(){
        return (

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" 
                             render={(props) => <Home {...props} odczyty={this.state.odczyty} />}
                        />
                        <Route path="/temperatury" 
                            render={(props) => <Temperatury {...props} odczyty={this.state.odczyty} />}
                         />
                        <Route path="/cisnienie" 
                            render={(props) => <Cisnienie {...props} odczyty={this.state.odczyty} />}
                         />
                        <Route path="/wilgotnosc" 
                            render={(props) => <Wilgotnosc {...props} odczyty={this.state.odczyty} />}
                         />
                        <Route path="/about" component={About} />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                </BrowserRouter>
         );
    }
}

export default Router;