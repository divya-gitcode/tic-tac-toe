import React from 'react';
// import logo from './logo.svg';
import Game from './components/Game';
import './App.css';

class App extends React.Component
{
  render()
  {
    return (
        //   <div className="App">
        //     <header className="App-header">
        //       <img src={logo} className="App-logo" alt="logo" />
        //       <p>
        //         hello and Welcome to react
        //       </p>
        //       <a
        //         className="App-link"
        //         href="https://reactjs.org"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         Learn React 
        //       </a>
        //     </header>
        //   </div>
        // );

        <Game/>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hello and Welcome to react
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React 
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
