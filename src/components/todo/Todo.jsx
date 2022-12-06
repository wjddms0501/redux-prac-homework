// src/pages/Work.js

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const DetailAll = styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDiv = styled.div`
  ${(props) =>
    props.DetailTop &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 24px;
    `}
  ${(props) =>
    props.DetailBox &&
    css`
      width: 600px;
      height: 400px;
      border: 1px solid rgb(238, 238, 238);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
    ${(props) =>
    props.DetailTxt &&
    css`
      padding: 0px 24px;
    `}
`;

const StButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

function Todo() {
  const param = useParams();
  const users = useSelector((state) => state.buttoner.todos);
  console.log(users);

  const user = users.find((user) => user.id === parseInt(param.id));
  console.log(user);
  return (
    <DetailAll>
      <StDiv DetailBox>
        <div>
          <div>
            <StDiv DetailTop>
              <p>ID : {user.id}</p>
              <Link to={`/`}>
                <StButton>이전으로</StButton>
              </Link>
            </StDiv>
            <StDiv DetailTxt>
              <h1>{user.title}</h1>
              <p>{user.todo}</p>
            </StDiv>
          </div>
        </div>
      </StDiv>
    </DetailAll>
  );
}

export default Todo;
