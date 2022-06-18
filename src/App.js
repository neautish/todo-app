import React, { useReducer } from "react";

import classes from "./App.module.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodosList from "./components/TodosList/TodosList";

const reducer = function (state, action) {
	switch (action.type) {
		case "ADD_TODO":
			const addedState = [{ title: action.title, id: action.id, complete: action.complete }, ...state];
			localStorage.setItem("todos", JSON.stringify(addedState));
			return addedState;
		case "DELETE_TODO":
			const deletedState = state.filter((item) => item.id !== action.id);
			localStorage.setItem("todos", JSON.stringify(deletedState));
			return deletedState;
		case "COMPLETE_TODO":
			const setComplete = state.filter((item) => item.id === action.id);
			const others = state.filter((item) => item.id !== action.id);
			setComplete[0]["complete"] = action.complete;
			const completedState = [...others, ...setComplete];
			localStorage.setItem("todos", JSON.stringify(completedState));
			return completedState;
		default:
			return state;
	}
};

function App() {
	const todosList = localStorage.getItem("todos");
	const [todos, todoDispatch] = useReducer(reducer, todosList ? JSON.parse(todosList) : []);

	const AddTodoHandler = function (todo) {
		todoDispatch({
			type: "ADD_TODO",
			title: todo,
			id: Math.random().toString(),
			complete: false,
		});
	};

	const deleteHandler = function (id) {
		todoDispatch({
			type: "DELETE_TODO",
			id: id,
		});
	};

	const completeHandler = function (id) {
		todoDispatch({
			type: "COMPLETE_TODO",
			id: id,
			complete: true,
		});
	};

	return (
		<div className={classes.App}>
			<AddTodo onAddTodo={AddTodoHandler} />
			{todos.length > 0 ? (
				<TodosList items={todos} onComplete={completeHandler} onDelete={deleteHandler} />
			) : (
				<p className={classes["no-todo-message"]}>Your todo list is empty, add a new todo.</p>
			)}
		</div>
	);
}

export default App;
