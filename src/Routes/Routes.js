import Login from "../AuthPages/Login";
import VoteApp from "../VoteApp";

export const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <VoteApp />,
  },
];
