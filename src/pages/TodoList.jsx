import List from "../components/list/List";

function TodoList(props) {
  console.log(props);
  return (
    <div className="contents">
      <div>
        <h2>Working..🎂</h2>
        <div className="app-style">
          {props.users.map((user) =>
            user.isDone === true ? (
              <List
                key={user.id}
                user={user}
                onDeleteToDo={props.onDeleteToDo}
                onChangeHandler={props.onChangeHandler}
              ></List>
            ) : null
          )}
        </div>
      </div>
      <div>
        <h2>Done..🎁</h2>
        <div className="app-style">
          {props.users.map((user) =>
            user.isDone === false ? (
              <List
                key={user.id}
                user={user}
                onDeleteToDo={props.onDeleteToDo}
                onChangeHandler={props.onChangeHandler}
              ></List>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
