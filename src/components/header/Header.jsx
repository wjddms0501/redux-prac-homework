import styled from "styled-components";

// const header = () => {
//  return (

//  )
// }

const Top = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <Top>
      <p>🎉My To Do List🎉</p>
      <p>React</p>
    </Top>
  );
}
export default Header;
