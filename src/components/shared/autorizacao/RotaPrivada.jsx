import sessionUtil from "../../../util/sessionUtil";
import { Navigate } from 'react-router-dom';


export default function RotaPrivada({ children }) {
    const token = sessionUtil.getToken();
    console.log('alulululul')
    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
}

