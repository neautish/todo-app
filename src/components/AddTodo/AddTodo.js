import React from "react";

import classes from "./AddTodo.module.css";

function AddTodo() {
	const submitHandler = function (e) {
		e.preventDefault();
	};
	return (
		<form onSubmit={submitHandler}>
			<div className={classes["form-group"]}>
				<label for="inputTitle"></label>
				<input id="inputTitle" placeholder="Enter Your Todo" />
			</div>
			<button type="submit">Add Todo</button>
		</form>
	);
}

export default AddTodo;
