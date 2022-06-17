import React, { useState } from "react";

import { ReactComponent as PlusIcon } from "../../images/plus.svg";
import classes from "./AddTodo.module.css";

function AddTodo(props) {
	const [todo, setTodo] = useState("");

	const inputChangeHandler = function (e) {
		setTodo(e.target.value);
	};

	const submitHandler = function (e) {
		e.preventDefault();
		props.onAddTodo(todo);

		setTodo("");
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes["form-group"]}>
				<label htmlFor="inputTitle"></label>
				<input onChange={inputChangeHandler} id="inputTitle" placeholder="Enter Your Todo" value={todo} />
				<button type="submit">
					<PlusIcon className={classes.icon} />
				</button>
			</div>
		</form>
	);
}

export default AddTodo;
