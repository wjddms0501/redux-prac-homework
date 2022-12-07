// src/redux/modules/counter.js
//App.js로 넘기기위해서 buttoner.js에서 먼저 작성 후 보내기

// Action Value
const ADD_TODO = "ADD_TODO"; //안틀리게 쓸려고 지정하는 상수.
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

// Action Creator //action을 눌렀을 때 받아오는 action type이나 data들. 틀에맞춰 만들기
export const add_todo = (payload) => {
  //payload : ADD_TODO가 눌러졌을 때 변경할 때 필요한 정보들을 받아오는 값
  return {
    type: ADD_TODO, //reducer 안에서만 쓰는 변수 이름, 화면에 나타나지않음
    payload,
  };
};

export const delete_todo = (payload) => {
  //delete_todo를 눌렀을 때 App.js에 있는 onDeleteHandler에서 payload(=id)를 받아옴
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

//InitialState //화면에 표기할 초기값, 없으면 0, 무조건 객체와 배열을 사용해서 만들기
const initialState = {
  todos: [
    //여러개의 객체들을 하나로 뭉쳐서 복수형으로 정해주고 배열을 대괄호[]로 여러개의 객체를 담아줌, 분명하게 그 값을 알려주기 위해 쓴다.
    {
      id: Math.floor(Math.random() * 100000),
      title: "리액트를 공부하자",
      todo: "공부하자",
      isDone: true,
    },
    {
      id: Math.floor(Math.random() * 100000), //
      title: "리액트를 쌈싸먹자",
      todo: "쌈싸먹자",
      isDone: false,
    },
  ],
};

//Reducer
export const buttoner = (state = initialState, action) => {
  //action creator가 실행됐을 때 reducer가 store안에 있는 값을 실질적으로 변경해준다.
  if (action.type === ADD_TODO) {
    //if문이나 switch문으로 각각 지정해줌, 변경만해서 store에 넘겨주기만함
    return {
      ...state, //불변성의 법칙, 무조건 들어가야함
      todos: [...state.todos, action.payload], //초기값의 todos. '53번 ...state, + todos : '는 무조건 들어가야함.
    }; //state는 50번줄의 state
    //action type이 ADD_TODO가 맞으면 todos에 54번이 실행되고 값이 변경돼서 리렌더링이 될거야.
  } else if (action.type === DELETE_TODO) {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload), //delete_todo에 (id)값이 담겨있어서 action.payload로 써줌
      // const newUserList = users.filter((user) => user.id !== id); //원래형태
    };
  } else if (action.type === CHANGE_TODO) {
    return {
      ...state,
      todos: state.todos.map((todo) => {
        //App.js 안에 있는 onChangeHandler 함수를 보면 파라미터로 (users)를 넘겨주고
        // change_todo(users)에서 (users)라는 배열을 받아올건데 그 배열이
        // List.js에서 실질적으로 onChangeHandler(props.user)라는 배열을 받아와서 payload로 넘겨주기 때문에 id. isDone값에 접근할 수 있다.
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
// export default reducer //리듀서를 store로 넘겨준다.
export default buttoner;
