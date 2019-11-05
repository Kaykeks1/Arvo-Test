import React from 'react';
// import logo from './logo.svg';
// import MessageBox from './components/MessageBox';
// import ThreeChoices from './components/ThreeChoices';
// import Apple from './Assets/Apple.png';
// import Google from './Assets/Google.png';
// import avatarIcon from './Assets/avatarIcon.png';
// import Phone from './Assets/Phone.png';
// import Phone2 from './Assets/Phone2.png';
// import Vector from './Assets/Vector.png';
// import Shape from './Assets/Shape.png';
// import Vector7 from './Assets/Vector7.png';
// import loan from './Assets/loan.png';
// import user from './Assets/user.png';
// import sponsor1 from './Assets/sponsor1.png';
// import sponsor2 from './Assets/sponsor2.png';
// import sponsor3 from './Assets/sponsor3.png';
// import sponsor4 from './Assets/sponsor4.png';
// import splashScreenLogo from './Assets/splashScreenLogo.png';
import LandingPage from './components/LandingPage';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css';

function App() {
  
  console.log(window.innerWidth)
  return (
    <div className="App">
      <LandingPage />

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
    </div>
  );
}

export default App;
