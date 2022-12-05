// src/redux/modules/counter.js
//App.js로 넘기기위해서 buttoner.js에서 먼저 작성 후 보내기

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

// Action Creator
export const add_todo = (payload) => {
  return {
    type: ADD_TODO, //reducer 안에서만 쓰는 변수 이름, 화면에 나타나지않음
    payload,
  };
};

export const delete_todo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const change_todo = (payload) => {
  return {
    type: CHANGE_TODO,
    payload,
  };
};

//InitialState
const initialState = {
  todos: [
    {
      id: Math.floor(Math.random() * 100000),
      title: "리액트를 공부하자",
      todo: "공부하자",
      isDone: true,
    },
    {
      id: Math.floor(Math.random() * 100000), //내일 다시 설명듣게씀다..!
      title: "리액트를 쌈싸먹자",
      todo: "쌈싸먹자",
      isDone: false,
    },
  ],
};

//Reducer
export const buttoner = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return {
      ...state, //불변성의 법칙
      todos: [...state.todos, action.payload],
    };
  } else if (action.type === DELETE_TODO) {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
      // const newUserList = users.filter((user) => user.id !== id);
    };
  } else if (action.type === CHANGE_TODO) {
    return {
      ...state,
      todos: state.todos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, isDone: !action.payload.isDone }
          : { ...todo };
      }),
      // users.map((user) => {
      //   return user.id === id ? { ...user, done: !user.done } : { ...user };
      // });
    };
  } else {
    return state;
  }
};
// export default reducer
export default buttoner;
