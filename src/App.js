import React from 'react';
import { BrowserRouter as Router,Link,NavLink,Route
}
from 'react-router-dom';
const Home = () => <h1>Home</h1>

const About = () => <h1>About</h1>

function App(){
  return(
    <Router>
      {/* <NavLink activeClassName="active" to="/about">About</NavLink> |
      <NavLink activeClassName="active" to="/home">Home</NavLink> */}

      <Route path="/about" component={About}/>
      <Route path="/home" component={Home}/>
    </Router>
  )
}
// import React, {Component} from 'react';
// class App extends Component {
//   state=[
//     {id:1,name:"Preeti"},
//     {id:2,name:"Rohit"},
//     {id:3,name:"Ankit"}
//   ];
//   render(){
//     return(
//       <ul>
//         {
//           this.state.map(data=>{
//           return <li key={data.id}>{data.id}:{data.name}</li>
//         })}
//       </ul>
//     );
//   }
// }
export default App;
