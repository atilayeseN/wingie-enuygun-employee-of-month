import Login from "../AuthPages/Login";
import VoteApp from "../VoteApp";
import PrivateRoute from "../Components/PrivateRoute";

export const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <VoteApp />
      </PrivateRoute>
    ),
  },
];
