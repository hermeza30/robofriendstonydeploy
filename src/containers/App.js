import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundary';
export default class App extends Component{

    constructor(){
        super();
        this.state={
            robots:[],
            searchField:''
        }
        console.log("constructor")
    }
    componentDidMount(){//After render
        console.log("componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((res)=>{
            this.setState({robots:res})
        }).catch(console.log)
    }
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})
    }
    render(){
        const {robots,searchField}=this.state;
        const filteredRobots=robots.filter(
            x=>x.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
            );
        if(!robots.length){
            return <h1>Loading!...</h1>
        }else{
            return (
            <div className="tc">
                <h1 className="f2">Robo-Tony-Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            )
        }
    }    
 }
