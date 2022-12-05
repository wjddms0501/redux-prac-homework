import CustomButton from "./Custombutton";

function User(props) {
  console.log(props);
  return (
    <div className="square-style">
      <div>
        <h2>{props.user.title}</h2>
        <h4>{props.user.todo}</h4>
        <div className="btns">
          <CustomButton
            width="130px"
            height="40px"
            backgroundColor="transparent"
            border="2px solid red"
            onClick={() =>
              // props.deleteUserHandler(props.user.id);
              props.onDeleteToDo(props.user.id)
            }
          >
            삭제하기
          </CustomButton>
          <CustomButton
            width="130px"
            height="40px"
            backgroundColor="transparent"
            border="2px solid green"
            onClick={() => {
              props.onChangeHandler(props.user);
            }}
          >
            {props.user.isDone === true ? "완료" : "취소"}
          </CustomButton>
          {/*👆CustomButton의 props로 color 넘기기 */}
          {/*👆삭제버튼 */}
        </div>
      </div>
    </div>
  );
}

export default User;
