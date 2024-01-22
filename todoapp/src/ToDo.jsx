import logo from "./logo.svg";
//CSSを読み込む
import "./App.css";
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { BackTodo } from "./components/BackTodo";

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

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeText}
        onClick={addTodo}
        disabled={isMaxLimitIncompleteTodos}
      ></InputTodo>
      {/* 未完了のタスクが5個以上の場合、エラーメッセージを表示 */}
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: "red" }}>登録できるToDoは5個までです。</p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      ></IncompleteTodos>
      <BackTodo completeTodos={completeTodos} backTodo={backTodo}></BackTodo>
    </>
  );
};
