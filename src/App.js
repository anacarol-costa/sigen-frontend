import './App.css';
import { Link } from "react-router-dom";
import Header from './components/shared/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Link to="/login">Login</Link>
    </div>
  );
}

export default App;