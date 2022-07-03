import style from "./Info.module.scss";

export default function Info({ member }) {
  return (
    <div className={style.userCard}>
      <img
        alt={member.picture}
        src={process.env.REACT_APP_ENDPOINTKEY + "/get-image/" + member._id}
      ></img>
      <h2>
        {member.name} {member.surname}
      </h2>
      <label>ID: {member._id}</label>
      <label>Gender: {member.gender === "1" ? "Male" : "Female"}</label>
      <label>Point: {member.point}</label>
      <label>Email: {member.email}</label>
      <label>Phone: {member.phone}</label>
    </div>
  );
}
