import styles from "./Welcomemsg.module.css"
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItems-store";
const Welcomemsg = () => {
    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;
    return (
        todoItems.length === 0 && <h2 className={styles.welcome}>Nothing ToDo! Enjoy your day</h2 >
    );
}
export default Welcomemsg