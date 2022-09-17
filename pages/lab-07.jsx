import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Todolist from "../components/Todolist";

export default function todolist() {
  const [todoText, setTodoText] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const onKeyUpHandler = (g) => {
    if (g.key !== "Enter") return;
    if (todoInput !== "") {
      setTodoText([{ title: todoInput, completed: false }, ...todoText]);
      setTodoInput("");
    } else {
      alert("Todo cannot be empty");
    }
  };
  const deleteTodo = (idx) => {
    todoText.splice(idx, 1);
    setTodoText([...todoText]);
  };

  const markTodo = (idx) => {
    todoText[idx].completed = !todoText[idx].completed;
    setTodoText([...todoText]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const title = todoText[idx].title;
    const completed = todoText[idx].completed;
    todoText[idx].title = todoText[idx - 1].title;
    todoText[idx].completed = todoText[idx - 1].completed;
    todoText[idx - 1].title = title;
    todoText[idx - 1].completed = completed;
    setTodoText([...todoText]);
  };

  const moveDown = (idx) => {
    if (idx === todoText.length - 1) return;
    const title = todoText[idx].title;
    const completed = todoText[idx].completed;
    todoText[idx].title = todoText[idx + 1].title;
    todoText[idx].completed = todoText[idx + 1].completed;
    todoText[idx + 1].title = title;
    todoText[idx + 1].completed = completed;
    setTodoText([...todoText]);
  };

  const savetodo = () => {
    const todoTextstr = JSON.stringify(todoText);
    localStorage.setItem("todotextlist", todoTextstr);
  };
  const [data, setdata] = useState(true);
  useEffect(() => {
    if (data) setdata(false);
    else savetodo();
  }, [todoText]);

  useEffect(() => {
    const todoTextstr = localStorage.getItem("todotextlist");
    if (!todoTextstr) setTodoText([]);
    else setTodoText(JSON.parse(todoTextstr));
  }, []);

  return (
    <div>
      <Navbar />
      {/* Entire App container (required for centering) */}
      <div style={{ maxWidth: "700px" }} className="mx-auto">
        <input
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
          onKeyUp={onKeyUpHandler}
        />
        {/* Todos */}
        {todoText.map((todo, i) => (
          <Todolist
            title={todo.title}
            completed={todo.completed}
            DELETE={() => deleteTodo(i)}
            MARK={() => markTodo(i)}
            MOVEUP={() => moveUp(i)}
            MOVEDOWN={() => moveDown(i)}
          />
        ))}
        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All ({todoText.length}) </span>
          <span className="text-warning">
            Pending ({todoText.filter((x) => x.completed === false).length}){" "}
          </span>
          <span className="text-success">
            Completed ({todoText.filter((x) => x.completed).length})
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
}
