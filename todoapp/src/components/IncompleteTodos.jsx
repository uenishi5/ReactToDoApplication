export const IncompleteTodos = (props) => {
  const { incompleteTodos, completeTodo, deleteTodo } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {incompleteTodos.map((todos, index) => {
          return (
            <li key={todos}>
              <div className="list-row">
                <p>{todos}</p>
                <button onClick={() => completeTodo(index)}>完了</button>
                <button onClick={() => deleteTodo(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
