import React, { useState } from "react";

import classes from "./AddTodo.module.css";

function AddTodo(props) {
	const [todo, setTodo] = useState("");

	const inputChangeHandler = function (e) {
		setTodo(e.target.value);
	};

	const submitHandler = function (e) {
		e.preventDefault();
		props.onAddTodo(todo);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={classes["form-group"]}>
				<label htmlFor="inputTitle"></label>
				<input onChange={inputChangeHandler} id="inputTitle" placeholder="Enter Your Todo" value={todo} />
				<button type="submit">Add Todo</button>
			</div>
		</form>
	);
}

export default AddTodo;
