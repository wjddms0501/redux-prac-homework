import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add_todo, change_todo, delete_todo } from "./redux/modules/buttoner";
import Form from "./components/form/Form";
import TodoList from "./pages/TodoList";
import { Route, Routes } from "react-router-dom";
import Todo from "./components/todo/Todo";
import styled, { css } from "styled-components";

const StDiv = styled.div`
  ${(props) =>
    props.All &&
    css`
      margin: 0 auto;
      max-width: 1200px;
      min-width: 800px;
    `}
`;

//찾아본 문서, 구글링 단어 검색법 알려달라하기
const App = () => {
  const users = useSelector((state) => state.buttoner.todos); //todos를 가져와서 useSelector로 선택하고 users라는 변수에 저장한다.
  console.log(users);

  const dispatch = useDispatch(); // dispatch라는 변수에 실행역할을 하는 useDispatch 실행함수를 담아줌 (=setTitle, setTodo랑 비슷한 역할)
  const [todo, setTodo] = useState("");
  const [title, setTitle] = useState(""); // 제목과 내용을 추가해주는 데 사용됨
  // setTitle, setTodo가 todo와 title을 변경해주는 함수고 그 변경된 값이 useState에 담겨서 리렌더링 됩니다.

  // const addUserHandler = () => {};
  // console.log(title);

  //Math.floor(Math.random()*100000) 1부터 10만까지의 랜덤 자연수

  // 제목과 내용을 추가해주는 데 사용됨
  // console.log(todo);

  // const addUserHandler = () => {
  //   const newUser = {
  //     id: users.length + 1,
  //     title: title,
  //     todo: todo,
  //     isDone: true,
  //   };
  //   setUsers([...users, newUser]); //serUsers: users의 상태를 추가해서 변경해줌 // [...A] : 전개연산자
  // };

  // const deleteUserHandler = (id) => {
  // const newUserList = users.filter((user) => user.id !== id); //users를 가져와서 filter를 돌릴건데 users를 user라는 이름으로 옆으로 넘겨준다.
  //user.id는 users의 내용, id는 내가 선택한 id값
  //for문처럼 id값이 같은 값이 나올 때까지 계속 돈다.
  // dispatch(delete_todo(id));
  // setUsers(newUserList);
  // };
  function onDeleteToDo(id) {
    //reducer에 있는 action creator의 type확인하고 payload(=id)값 넘겨주기
    dispatch(delete_todo(id)); //onDelete버튼이 눌렸을 때 reducer의 18~23까지가 먼저 실행된 후 62~66번까지 실행된 것이 dispatch로 나타내짐
  }

  // const onChangeHandler = (id) => {
  //   setUsers(
  //     //usestate의 함수형 업데이트 ★찾아보기
  //     users.map((user) => {
  //       return user.id === id ? (user.isDone = true) : user;
  //     })
  //   );
  // };

  function onChangeHandler(users) {
    dispatch(change_todo(users));
  }

  function onSubmit(e) {
    //onsubmit을 누르면 제출은 하지만
    e.preventDefault(); //새로고침은 하지말고 (제출방지)
    if (title === "" && todo === "") {
      //만약 title과 todo가 빈값이면
      return; //return해라. return뒤에 값이 없음 (setTitle과 setTodo와 dispatch를 실행하지 않음)
    } // 그렇지 않으면(else)
    setTitle(""); //Title을 setTitle로 빈값으로 비우고
    setTodo(""); //Todo를 setTodo로 빈값으로 비우고
    //밑에 내용을 payload로 넘겨주고 reducer에서 add_todo에 대한 실행을 하고 dispatch로 나타내줄거야.
    dispatch(
      add_todo({
        id: Math.floor(Math.random() * 100000),
        title: title,
        todo: todo,
        isDone: true,
      }) //add_todo:액션크리에이터, {payload}
    );
  }

  return (
    <StDiv All>
      {/* <Layout> */}
      <Routes>
        {/* 
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="/" element={<App />} /> */}
        <Route
          path="/"
          element={
            <div>
              <Form
                onSubmit={onSubmit}
                title={title}
                setTitle={setTitle}
                todo={todo}
                setTodo={setTodo}
              ></Form>
              <TodoList
                users={users}
                onDeleteToDo={onDeleteToDo}
                onChangeHandler={onChangeHandler}
              />
            </div>
          }
        />
        <Route path="detail/:id" element={<Todo />} />
      </Routes>
      {/* </Layout> */}
    </StDiv>
  );
};

export default App;
