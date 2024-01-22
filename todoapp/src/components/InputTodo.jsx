const style = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  //渡すpropsと同じ名前をつける
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      ></input>
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
