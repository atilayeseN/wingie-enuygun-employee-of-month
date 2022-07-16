import { Formik, Field, Form } from "formik";
import Button from "../Components/Button/Button";
import { login as loginService, verifyToken } from "../Services/post";
import { login } from "../store/auth";
import { useNavigate, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState();
  const { user } = useSelector((state) => state.auth);
  verifyToken(user.token).then((result) => {
    if (result) {
      setIsAuth(result);
    }
  });

  if (isAuth) {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => {
          const authResult = await loginService(values);
          if (authResult) {
            dispatch(login(authResult));
            navigate("/home", { replace: true });
          } else {
            toast.error("Wrong password");
          }
        }}
      >
        <Form>
          <Field name="username" type="text" placeholder="Username" />
          <Field name="password" type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
