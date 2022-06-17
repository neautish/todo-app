import React, { Fragment } from "react";

import { ReactComponent as CheckIcon } from "../../images/check.svg";
import { ReactComponent as CrossIcon } from "../../images/cross.svg";
import classes from "./TodosList.module.css";

function TodosList(props) {
	const deleteHandler = function (id) {
		props.onDelete(id);
	};

	const completeHandler = function (id) {
		props.onComplete(id);
	};

	return (
		<Fragment>
			<ul className={classes["todo-list"]}>
				{props.items.map((todo) => {
					return (
						!todo.complete && (
							<li key={todo.id} className={classes["todo"]}>
								<h4 className={classes["todo__title"]}>{todo.title}</h4>
								<div className={classes["btn-groups"]}>
									<button
										className={`${classes["todo__complete"]} ${classes["todo-btn"]}`}
										onClick={() => completeHandler(todo.id)}
									>
										<CheckIcon className={classes.icon} />
									</button>
									<button className={`${classes["todo__delete"]} ${classes["todo-btn"]}`} onClick={() => deleteHandler(todo.id)}>
										<CrossIcon className={classes.icon} />
									</button>
								</div>
							</li>
						)
					);
				})}
			</ul>
			{props.items.some((item) => item.complete) && (
				<ul className={classes["todo-list-completed"]}>
					<h4 className={classes["completed-todo__title"]}>COMPLETED TODO'S</h4>
					{props.items.map((todo) => {
						return (
							todo.complete && (
								<li key={todo.id} className={`${classes["todo"]} ${classes["todo-complete"]}`}>
									<h4 className={`${classes["todo__title"]} ${classes["todo__title--complete"]}`}>{todo.title}</h4>
									<div className={classes["btn-groups"]}>
										<span style={{ color: "#76c893" }}>DONE!</span>
										<button
											className={`${classes["todo__delete"]} ${classes["todo-btn"]}`}
											onClick={() => deleteHandler(todo.id)}
										>
											<CrossIcon className={classes.icon} />
										</button>
									</div>
								</li>
							)
						);
					})}
				</ul>
			)}
		</Fragment>
	);
}

export default TodosList;
