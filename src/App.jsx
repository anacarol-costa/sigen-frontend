import './App.css';
import { Link } from "react-router-dom";
import Header from './components/shared/Header';
import sessionUtil from './util/sessionUtil';
import Snackbar from "./components/snackbar/Snackbar";

export default function App() {

  const tokenUsuario = sessionUtil.getTokenCookieDecode();

  return (
    <div className="App" >
      <Header usuario={tokenUsuario} />
        <Snackbar />
      <Link to="/" > Login </Link>
    </div>
  );
}
