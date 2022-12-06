import List from "../components/list/List";
import styled, { css } from "styled-components";

const StDiv = styled.div`
  ${(props) =>
    props.AppStyle &&
    css`
      max-width: 1200px;
      min-width: 800px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    `}
  ${(props) =>
    props.Contents &&
    css`
      padding: 0 24px;
    `}
`;

function TodoList(props) {
  console.log(props);
  return (
    <StDiv Contents>
      <div>
        <h2>Working..🎂</h2>
        <StDiv AppStyle>
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
        </StDiv>
      </div>
      <div>
        <h2>Done..🎁</h2>
        <StDiv AppStyle>
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
        </StDiv>
      </div>
    </StDiv>
  );
}

export default TodoList;
