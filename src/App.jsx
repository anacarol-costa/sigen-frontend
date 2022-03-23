import './App.css';
import {
    Link, useNavigate
} from "react-router-dom";
import Header from './components/shared/Header';

export default function App() {

  return (
    <div className="App" >
      <Header usuario={tokenUsuario} />
      <Link to="/" > Login </Link>
    </div>
  );
}
