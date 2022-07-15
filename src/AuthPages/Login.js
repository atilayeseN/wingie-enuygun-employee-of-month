import { Formik, Field, Form } from "formik";
import Button from "../Components/Button/Button";
import { login } from "../Services/post";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          const authResult = await login(values);
          if (authResult) {
            navigate("/home", { replace: true });
          } else {
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
