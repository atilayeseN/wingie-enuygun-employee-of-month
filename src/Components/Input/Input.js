import { Formik, Form, Field } from "formik";
import { newIdGenerator } from "../../helper";
import Button from "../Button/Button";
import styles from "./Input.module.scss";
import { useDispatch } from "react-redux";
import { addMember } from "../../store/members";

export default function Input({members , manageModal}) {
  const dispatch = useDispatch();
  return (
      <Formik
        initialValues={{
          name: "",
          surname: "",
          position: "",
          gender: "",
          picture: "",
          point: 0,
          email: "",
          phone: "",
        }}
        onSubmit={(values, actions) => {
          values.id = newIdGenerator(members);
          dispatch(addMember(values));
          manageModal();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
            <Field type="file" access = "image/*" name="picture"></Field>
            </label>
            <Button type="submit" disabled={isSubmitting}>
              Save
            </Button>
          </Form>
        )}
      </Formik>
  );
}
