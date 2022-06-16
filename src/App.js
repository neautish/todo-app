import React, { useReducer } from "react";

import classes from "./App.module.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodosList from "./components/TodosList/TodosList";

const reducer = function (state, action) {
	switch (action.type) {
		case "add-todo":
			return [{ title: action.title, id: action.id }, ...state];
		case "delete":
			return state.filter((item) => item.id !== action.id);
		default:
			return state;
	}
};

function App() {
	const [todos, todoDispatch] = useReducer(reducer, []);

	const AddTodoHandler = function (todo) {
		todoDispatch({
			type: "add-todo",
			title: todo,
			id: Math.random().toString(),
		});
	};

	const deleteHandler = function (id) {
		todoDispatch({
			type: "delete",
			id: id,
		});
	};

	return (
		<div className={classes.App}>
			<AddTodo onAddTodo={AddTodoHandler} />
			<TodosList items={todos} onDelete={deleteHandler} />
		</div>
	);
}

export default App;
