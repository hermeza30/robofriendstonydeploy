import React, { Component,useState,useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundary';
import {setSearchField,requestRobots} from '../action';

// export default class App extends Component{

    
//     constructor(){
//         super();
//         this.state={
//             robots:[],
//             searchField:''
//         }
//         console.log("constructor")
//     }
//     componentDidMount(){//After render
//         fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((res)=>{
//             this.setState({robots:res})
//         }).catch(console.log)
//     }
//     onSearchChange=(event)=>{
//         this.setState({searchField:event.target.value})
//     }
//     render(){
//         const {robots,searchField}=this.state;
//         const filteredRobots=robots.filter(
//             x=>x.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
//             );
//         if(!robots.length){
//             return <h1>Loading!...</h1>
//         }else{
//             return (
//             <div className="tc">
//                 <h1 className="f2">Robo-Tony-Friends</h1>
//                 <SearchBox searchChange={this.onSearchChange}/>
//                 <Scroll>
//                     <ErrorBoundry>
//                         <CardList robots={filteredRobots}/>
//                     </ErrorBoundry>
//                 </Scroll>
//             </div>
//             )
//         }
//     }    
//  }
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
    console.log("Props",props)
    // const [robots,setRobots]=useState([]);
    const [count, setCount]=useState(0);
    const {searchField,onSearchChange,robots,isPending}=props;
    // useEffect(()=>{
    //    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((res)=>{
    //        setRobots(res);
    //        console.log("count",count)
    //        }).catch(console.log)
    // },[count]);
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