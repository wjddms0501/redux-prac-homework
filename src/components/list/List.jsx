import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const SquerStyle = styled.div`
  width: 326px;
  height: 202px;
  border: 4px solid teal;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDiv = styled.div`
  ${(props) =>
    props.Btns &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    `}
`;

function List(props) {
  console.log(props);
  return (
    <SquerStyle>
      <div className="square-style">
        <div>
          <Link to={`/detail/${props.user.id}`}>
            <span style={{ cursor: "pointer" }}>상세보기</span>
          </Link>
          <h2>{props.user.title}</h2>
          <h4>{props.user.todo}</h4>
          <StDiv Btns>
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
          </StDiv>
        </div>
      </div>
    </SquerStyle>
  );
}

export default List;
