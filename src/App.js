import React, { useReducer } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodosList from "./components/TodosList/TodosList";

const reducer = function (state, action) {
	switch (action.type) {
		case "add-todo":
			return "sdf";
		default:
			return state;
	}
};

function App() {
	const [todos, todoDispatch] = useReducer(reducer, []);

	return (
		<div className="App">
			<AddTodo />
			<TodosList items={todos} />
		</div>
	);
}

export default App;
