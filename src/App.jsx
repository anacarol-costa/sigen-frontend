import './App.css';
import { Link } from "react-router-dom";
import Header from './components/shared/Header';
import sessionUtil from './util/sessionUtil';

export default function App() {

  const tokenUsuario = sessionUtil.getTokenCookieDecode();

  return (
    <div className="App" >
      <Header usuario={tokenUsuario} />
      <Link to="/" > Login </Link>
    </div>
  );
}
