import React from "react";

import { ReactComponent as CheckIcon } from "../../images/check.svg";
import { ReactComponent as CrossIcon } from "../../images/cross.svg";
import classes from "./TodosList.module.css";

function TodosList(props) {
	const deleteHandler = function (id) {
		props.onDelete(id);
	};

	return (
		<ul className={classes["todo-list"]}>
			{props.items.map((todo) => {
				return (
					<li key={todo.id} className={classes["todo"]}>
						<h3 className={classes["todo__title"]}>{todo.title}</h3>
						<button className={`${classes["todo__delete"]} ${classes["todo-btn"]}`} onClick={() => deleteHandler(todo.id)}>
							<CrossIcon className={classes.icon} />
						</button>
					</li>
				);
			})}
		</ul>
	);
}

export default TodosList;
