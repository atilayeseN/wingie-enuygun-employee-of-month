import { Formik, Form, Field } from "formik";
import Button from "../Button/Button";
import styles from "./Input.module.scss";
import { useDispatch } from "react-redux";
import { addMember } from "../../store/members";
import { postMember ,hello } from "../../Services/post";

export default function Input({members , manageModal}) {
  const dispatch = useDispatch();
  hello();
  return (
      <Formik
        initialValues={{
          id : 0,
          name: "",
          surname: "",
          position: "",
          gender: "",
          picture: "",
          point: 0,
          email: "",
          phone: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          // dispatch(addMember(values));
          postMember(values);
          manageModal();
        }}
      >
        {({ isSubmitting,setFieldValue }) => (
          <Form encType="multipart/form-data">
            <h1>Add Member</h1>
            <Field type="text" placeholder="Name" name="name" />
            <Field type="text" placeholder="Surname" name="surname" />
            <div className={styles.checkboxConatiner}>
              <p>Choose Position</p>
              <label>
                <Field type="radio" value="front-end" name="position" />
                Front-end
              </label>
              <label>
                <Field type="radio" value="back-end" name="position" />
                Back-end
              </label>
              <label>
                <Field type="radio" value="architect" name="position" />
                Solution architect
              </label>
            </div>
            <Field component="select" name="gender">
              <option>Choose Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Field>
            <Field type="email" placeholder = "Email" name="email"></Field>
            <Field type="tel" placeholder = "Telephone" name="phone"></Field>
            <label>
              Select profile picture: 
              <Field type = "file" name = "picture" onChange = {(event) => {
                setFieldValue("file",event.target.files[0]);
              }}></Field>
            </label>
            <Button type="submit" disabled={isSubmitting}>
              Save
            </Button>
          </Form>
        )}
      </Formik>
  );
}
