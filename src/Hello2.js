import React ,{Component} from 'react';
import './Hellow2.css'
// export class Hellow2 extends Component{
//     render(){
//         return (
//         <div className="f1 tc">
//             <h1>Hola hello 2</h1>
//             <p>Naaaaa</p>
//             <p>{this.props.greeting}</p>
//         </div>    
//         )
//     }
// }
const Hellow2=(props)=>{

    return (
        <div className="b--light-gray">
            <h1>Hola hello 2</h1>
            <p>Naaaaa</p>
            <p>{props.greeting}</p>
        </div>    
        )
    
}
export default Hellow2;