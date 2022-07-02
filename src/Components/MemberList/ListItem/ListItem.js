import styles from "./ListItem.module.scss";
import Button from "../../Button/Button";
import { useDispatch } from "react-redux"
import {increasePoint} from "../../../store/members";

function ListItem({ listItem, memberModal,...props }) {
  const dispatch = useDispatch()
  const increasetPoint = (id) => {
     dispatch(increasePoint(id));
  };

  return (
    <>
      <li {...props}>
         <p onClick={() => memberModal(listItem)}><img src={listItem.picture}></img>{listItem.name} {listItem.surname}</p> <Button event={() => increasetPoint(listItem.id)} style = {{backgroundColor: "$blue"}}>Vote</Button>
         <div className={styles.pointBox}>{listItem.point}</div>
      </li>
    </>
  );
}
export default ListItem;
