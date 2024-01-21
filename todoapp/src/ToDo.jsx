import logo from "./logo.svg";
//CSSを読み込む
import "./App.css";
import { useState } from "react";

export const ToDo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["ToDoです", "ToDo2"]);
  const [completeTodos, setCompleteTodos] = useState(["完了", "完了2"]);

  // onChange={onChangeText}で変更された値を取得し、状態を変化させる
  const onChangeText = (event) => setTodoText(event.target.value);

  const addTodo = () => {
    //空の内容だったら、何もしない
    if (todoText === "") return;

    // incompleteTodosの配列をコピーしtodoTextを追加、入力欄を空にする
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //未完了から完了にタスクを移動
  const completeTodo = (index) => {
    //未完了のToDoリストから選択した要素を削除
    const InCompleteTodos = [...incompleteTodos];
    InCompleteTodos.splice(index, 1);

    //未完了から完了になった要素を追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(InCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //未完了上のタスクを削除
  const deleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    //配列から指定した範囲の要素を削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了上のタスクを戻す
  const backTodo = (index) => {
    //完了上のタスクを削除
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);

    //選択した完了タスクを未完了タスクに移動
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>T
      <div className="input-area">
        <input
          placeholder="ToDoを入力"
          value={todoText}
          onChange={onChangeText}
        ></input>
        <button onClick={addTodo}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {/* 受け取った内容を表示する */}
          {incompleteTodos.map((todos, index) => {
            //returnを削除しても動作する
            return (
              // 一意に判別できる値をkeyにする
              <li key={todos}>
                <div className="list-row">
                  <p>{todos}</p>
                  <button onClick={() => completeTodo(index)}>完了</button>
                  {/* 
                  deleteTodo(index)のように引数を設定してしまうと、ループ分関数が実行されてしまう
                  →ボタンを押下時に関すを実行するようにする 
                  関数を生成して、その中で関数を実行するように修正
                  */}
                  <button onClick={() => deleteTodo(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
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
      ï
    </>
  );
};
