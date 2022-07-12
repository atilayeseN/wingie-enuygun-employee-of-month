import { Formik, Form, Field } from "formik";
import Button from "../Button/Button";
import styles from "./Input.module.scss";
import { useQueryClient } from "react-query";
import { postMember, eventLog } from "../../Services/post";
import { MemberScheme } from "../../Validation/Scheme";

export default function Input({ members, manageModal }) {
  const queryClient = useQueryClient();
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        position: "",
        gender: "",
        point: 0,
        email: "",
        picture: "",
        phone: "",
      }}
      validationSchema={MemberScheme}
      onSubmit={async (values) => {
        const newMember = await postMember(values);
        queryClient.setQueryData("members", (old) => [...old, newMember]);
        await eventLog("Added new member" + JSON.stringify(newMember));
        manageModal();
      }}
    >
      {({ isSubmitting, setFieldValue, errors, touched }) => (
        <Form encType="multipart/form-data">
          <h1>Add Member</h1>
          <Field type="text" placeholder="Name" name="name" />
          {errors.name && touched.name ? <p>{errors.name}</p> : null}
          <Field type="text" placeholder="Surname" name="surname" />
          {errors.surname && touched.surname ? <p>{errors.surname}</p> : null}
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
          <Field type="email" placeholder="Email" name="email"></Field>
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
          <Field
            type="tel"
            placeholder="Telephone"
            name="phone"
          ></Field>
          {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
          <label>
            Select profile picture:
            <input
              type="file"
              accept=".jpeg, .png, .jpg"
              onChange={async (event) => {
                await setFieldValue("picture", event.target.files[0]);
              }}
            ></input>
          </label>
          <Button type="submit" disabled={isSubmitting}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
}
