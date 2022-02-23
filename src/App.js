//import logo from './logo.svg';
import React  from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
// import LoginPage from './pages/LoginPage';
import Routes from './route/routes';

function Login() {
  return <LoginPage />;
}
export default function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <link to= "/login">Login</link>
        </li>
      </ul>

      <Route path='/login' component = { Login }></Route>
    </BrowserRouter>
  );
}

// function App() {
//   return(
//     <Router>
//     <div className='App'>
//       <Link to='/login'>Login</Link>
//     </div>
//     <Routes>
//       <Route path='/login' component={LoginPage()} />
//     </Routes>
//   </Router>
//   )
// }



//export default App;
