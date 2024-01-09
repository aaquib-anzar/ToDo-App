import { useContext, useRef } from "react";
import { MdOutlineAddToQueue } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItems-store";

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext)
  const toDoNameElement = useRef();
  const toDoDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = toDoNameElement.current.value;
    const todoDate = toDoDateElement.current.value;
    addNewItem(todoName,todoDate);
    toDoNameElement.current.value = "";
    toDoDateElement.current.value = "";
  }

  
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit ={handleAddButtonClick}>
        <div className="col-5">
          <input type="text" placeholder="Enter TODO here" ref={toDoNameElement}></input>
        </div>
        <div className="col-5">
          <input type="date" ref={toDoDateElement}></input>
        </div>
        <div className="col-2">
          <button type="submit " class="btn btn-success kg-button" >
          <MdOutlineAddToQueue />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
