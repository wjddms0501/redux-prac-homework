import CustomButton from "../CustomButton/CustomButton";
import styled from "styled-components";

//Middle의 div를 form으로 바꾸기
const Middle = styled.form`
  background-color: #eeeeee;
  width: 1200px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const TxtLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
`;

const Txt = styled.input`
  border: 0px;
  border-radius: 10px;
  width: 264px;
  height: 40px;
  margin: 0 20px;
`;

function Form(props) {
  return (
    <Middle onSubmit={props.onSubmit}>
      <TxtLine>
        <p>
          제목
          <Txt //1. input칸에
            type="text"
            value={props.title} //3. 맨 위체 선언한 title값이 바뀌면서 value에 title값도 자동으로 바뀐다.
            onChange={(e) => props.setTitle(e.target.value)} //2. setTitle이 새로 입력된 value 값을 targeting해서 3번의 값을 바꿔준다.
          />
        </p>
        <p>
          내용
          <Txt
            type="text"
            value={props.todo}
            onChange={(e) => props.setTodo(e.target.value)}
          />
        </p>
      </TxtLine>
      <CustomButton
        width="140px"
        height="40px"
        border="0px"
        color="white"
        backgroundColor="#008080"
      >
        추가하기
      </CustomButton>
    </Middle>
  );
}

export default Form;
