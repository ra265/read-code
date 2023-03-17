import React,{Component} from "react";
import './App.css'

// class Header extends Component{
//   render(){
//     return(
//       <div className="header">
//       <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Urus/4418/Lamborghini-Urus-V8/1621927166506/front-left-side-47.jpg?tr=h-48" alt="" width="100" />
//         <h1>Header</h1>
//       </div>
//     )
//   }
// }

// class Footer extends Component{
//   render(){
//     return(
//       <div className="footer">
//         <h1>Footer</h1>
//       </div>
//     )
//   }
// }

// class App extends Component{
//   render(){
//     // let todos = [{ text : 'faizan'},{text: 'raza'}]
//     return( 
//       <div>   
//       <h1>Main Component</h1>
//         {/* <ul>
//           {todos.map((item,index)=>{
//             return<li key={index}>{item.text}</li>
//           })} */}
//           {/* <li>{todos[0].text}</li>
//           <li>{todos[1].text}</li> */}
//         {/* </ul> */}
//       </div>
//     )
//   }
// }

class App extends Component{
  render(){
    return(
      <div>
        {/* <Header />    */}
        {/* <h1 style={{color : 'red', fontSize : '18px'}}>Fain Component</h1> */}
        <h1 style={{color : 'red', fontSize : 18}}>Fain Component</h1>
        {/* shorcut keys are not work like h1 */} 
        {/* so we change the file name extension .jsx */}
        {/* <Footer /> */}
      </div>
    )
  }
}

// function App(){
//   return(
//  <div>
//   <h1>Hello World</h1>
//  </div>   
//   )
// }



export default App;
