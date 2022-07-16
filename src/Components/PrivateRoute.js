import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../Services/post";


export default function PrivateRoute({ children }) {

	const { user } = useSelector(state => state.auth)

	if (verifyToken(user.token)) {
		return children
	}



	return <Navigate to="/" replace={true} />
}