import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Welcomemsg from "./components/Welcomemsg";
import "./App.css";
import { useReducer} from "react";
import { TodoItemsContext } from "./store/TodoItems-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItem = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        date: action.payload.itemDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItem;
};
function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDate: itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const DeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
 

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        DeleteItem: DeleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcomemsg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
