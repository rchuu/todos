const Todo = (props) => {
    const todoClasses = ["bold", "italic"];

    if (props.todo.complete) {
        todoClasses.push('line-through');
    }

    return (
        <div>
            <input
                onChange={(event) => {
                    props.handleToggleComplete(i);
                }}
                checked={props.todo.complete}
                type='checkbox' />
            <input onChange={(event) => {
                handleToggleComplete(i);
            }} type="checkbox" checked={props.todo.completed} />
            <span className={todoClasses.join(' ')}>{props.todo.text}</span>
            <button
                onClick={(event) => {
                    props.handleTodoDelete(props.i);

                }}>Delete</button>
        </div>
    )
};

export default Todo;