import { Formik, Form, Field } from "formik";
import Button from "../Button/Button";
import styles from "./Input.module.scss";
import { useQueryClient } from "react-query";
import { postMember, eventLog } from "../../Services/post";

export default function Input({ members, manageModal }) {
  const queryClient = useQueryClient();
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
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
      onSubmit={async (values) => {
        console.log(values);
        const newMember = await postMember(values);
        queryClient.setQueryData("members", (old) => [...old, newMember]);
        await eventLog("Added new member" + JSON.stringify(newMember));
        manageModal();
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form encType="multipart/form-data">
          <h1>Add Member</h1>
          <Field type="text" placeholder="Name" name="name" required />
          <Field type="text" placeholder="Surname" name="surname" required />
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
          <Field component="select" name="gender" required>
            <option>Choose Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </Field>
          <Field type="email" placeholder="Email" name="email" required></Field>
          <Field
            type="tel"
            placeholder="Telephone"
            name="phone"
            pattern="\d+" 
            required
          ></Field>
          <label>
            Select profile picture:
            <input
              type="file"
              accept=".jpeg, .png, .jpg"
              onChange={async (event) => {
                const base64File = await convertToBase64(event.target.files[0]);
                setFieldValue("picture",base64File);
              }}
              required
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
