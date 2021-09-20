import React, { Component,useState,useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundary';
import {setSearchField,requestRobots} from '../action';

const mapStateToProps=state=>{
    return {
        searchField:state.searchRobots.searchField,//toma el state
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}
const mapDispatcherProps = ( dispatch )=>({
    onSearchChange: (event) => dispatch( setSearchField( event.target.value ) ),//Dispara la accion. Pasa al dispatch un objeto
    onRequestRobots: (event) => dispatch( requestRobots() )//Dispara la accion//Pasa al dispatch una function
});
function App(props){

    const [count, setCount]=useState(0);
    
    const {searchField,onSearchChange,robots,isPending}=props;
    
    useEffect(()=>{
        props.onRequestRobots();
    },[]);

    const filteredRobots=robots.filter(
        x=>x.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        );

    if(isPending){
        return <h1>Loading!...</h1>
    }else{
        return (
        <div className="tc">
            <h1 className="f2">Robo-Tony-Friends</h1>
            <button onClick={()=>setCount(count+1)}>ClickMe</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatcherProps)(App);