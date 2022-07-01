import Button from "../Button/Button"
import styles from "./Modal.module.scss"
 
export default function Modal({children,manageModal}) {
    return (
        <div className={styles.modalContainer}>
            <Button event = {manageModal} style = {{backgroundColor:"red"}}>Close</Button>
            {children}
        </div>
    )
}
