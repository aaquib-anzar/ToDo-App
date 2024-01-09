import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItems-store";
function TodoItem({todoName,todoDate}) {

  const {DeleteItem} = useContext(TodoItemsContext);
  

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button " className="btn btn-danger kg-button" onClick = {() => DeleteItem(todoName)}>
          <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
