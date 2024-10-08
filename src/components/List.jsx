function List ({ tasklist }) {
    const ShowTask = () => {
        const list = tasklist.map(task => <li> {task.texto} - {task.priority} </li>);
        return list;
    }

    return <ul>{ShowTask()}</ul>
}
export default List;