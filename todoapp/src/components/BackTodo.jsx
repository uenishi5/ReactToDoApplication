export const BackTodo = (props) => {
  const { completeTodos, backTodo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のToDo</p>
      <ul>
        {completeTodos.map((completeTodos, index) => {
          return (
            <li key={completeTodos}>
              <div className="list-row">
                <p>{completeTodos}</p>
                <button onClick={() => backTodo(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
