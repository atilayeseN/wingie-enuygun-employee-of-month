import * as Yup from "yup";

const MemberScheme = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email('Must be a valid email'),
  phone: Yup.string().matches(/^[0-9]{10}$/gm,'You have to enter valid phone number')
});

export {MemberScheme}
