// import React from 'react';
// // THIS IS A TEST COMPONENT. FEEL FREE TO REMOVE WHEN MORE IN DEPTH STYLING IS DONE
// const Home = () => {
//     return (
//         <div>
//             <h1>YOU WERE AUTHENTICATED I THINK</h1>
//         </div>
//     );
// };

// export default Home;

import React, { Component } from "react";
// import fire from "../config/Fire";
import Login from "./login"

class Home extends Component {
  

//   componentDidMount() {
//     this.authListener();
//   }
  render() {
    return <div>
        <Login/>
        {/* Need to figure out after things are set up */}
        {/* {this.state.user ? <Home /> : <Login />} */}
    </div>;
  }
}

export default Home;
