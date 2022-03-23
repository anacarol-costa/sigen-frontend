import './App.css';
import {
    Link, useNavigate
} from "react-router-dom";
import Header from './components/shared/Header';
import sessionUtil from './util/sessionUtil';
import {useEffect} from "react";

export default function App() {
    const navigate = useNavigate();
    let tokenUsuario = {};

    useEffect(() => {
        const tokenJwt = sessionUtil.getToken();
        if(!tokenJwt) {
            navigate('/')
        } else {
            tokenUsuario = sessionUtil.getTokenCookieDecode();
        }
    })

  return (
    <div className="App" >
      <Header usuario={tokenUsuario} />
      <Link to="/" > Login </Link>
    </div>
  );
}
