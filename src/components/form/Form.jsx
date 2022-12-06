import CustomButton from "../CustomButton/CustomButton";

function Form(props) {
  return (
    <div className="middle">
      <div className="txtline">
        <p>
          제목
          <input //1. input칸에
            className="txt"
            value={props.title} //3. 맨 위체 선언한 title값이 바뀌면서 value에 title값도 자동으로 바뀐다.
            onChange={(e) => props.setTitle(e.target.value)} //2. setTitle이 새로 입력된 value 값을 targeting해서 3번의 값을 바꿔준다.
          />
        </p>
        <p>
          내용
          <input
            className="txt"
            value={props.todo}
            onChange={(e) => props.setTodo(e.target.value)}
          />
        </p>
      </div>
      <CustomButton
        width="140px"
        height="40px"
        border="0px"
        color="white"
        backgroundColor="#008080"
        onClick={props.addUserHandler}
      >
        추가하기
      </CustomButton>
    </div>
  );
}

export default Form;
