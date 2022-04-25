import React , {Component}from 'react';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'


class Router extends Component{
    render(){
        return ( 
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Root}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


const Root = () => {
    return(
        "MAin"
    )
}

const Home = (props) => {
    console.log(props)
    return(
        <div>
            Home
            <button onClick={()=>props.history.replace("/contact")}/>
            <button onClick={()=>props.history.push({ pathname: "/contact", state:{name : "imran"}})}/>
        </div>
        
    )
}

const Contact = (props) => {
    console.log(props)
    return(
        "Contact"
    )
}

const Navbar = () => {
    return(
        <div>
            <Link to="/home" >Home</Link>
            <Link to="/contact" >Contact</Link>
        </div>
    )
}

export default Router
