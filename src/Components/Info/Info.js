import style from "./Info.module.scss"

export default function Info({member}) {
  return (
    <div className={style.userCard}>
      <img alt={member.picture} src={member.picture}></img>
      <h2>{member.name} {member.surname}</h2> 
      <label>
        Gender: {member.gender === "1" ? "Male" : "Female"}
      </label>
      <label>
        Picture: {member.picture}
      </label>
      <label>
        Point: {member.point}
      </label>
      <label>
        Email: {member.email}
      </label>
      <label>
        Phone: {member.phone}
      </label>
    </div>
  );
}
