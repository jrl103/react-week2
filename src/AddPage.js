import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addWordFB } from "./redux/modules/word";

const AddPage = (props) => {
  const dispatch = useDispatch();
  const word = React.useRef(null);
  const desc = React.useRef(null);
  const ex = React.useRef(null);
  const addWordList = () => {
    // dispatch(createWord({text:text.current.value, completed:false}));

    dispatch(
      addWordFB({
        word: word.current.value,
        desc: desc.current.value,
        ex: ex.current.value,
      })
    );
  };
  return (
    <Wrap>
      <Title>단어 추가하기</Title>
      <InputWrap>
        <InputBox>
          <InputTitle>단어</InputTitle>
          <input type="text" ref={word} />
        </InputBox>
        <InputBox>
          <InputTitle>설명</InputTitle>
          <input type="text" ref={desc} />
        </InputBox>
        <InputBox>
          <InputTitle>예시</InputTitle>
          <input type="text" ref={ex} />
        </InputBox>
      </InputWrap>
      <Link to="/">
        <AddButton onClick={addWordList}>추가하기</AddButton>
      </Link>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: aquamarine;
  padding: 16px;
  width: 35vw;
  height: 100vh;
  margin: auto;
`;
const Title = styled.h1``;
const InputWrap = styled.div``;
const InputBox = styled.div`
  background-color: #fff;
  width: 30rem;
  height: 5rem;
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const InputTitle = styled.h2`
  text-decoration: underline;
  font-size: 13px;
`;
const AddButton = styled.button`
  color: #fff;
  background-color: blue;
  font-size: 20px;
  width: 32rem;
  height: 4rem;
  margin: 30px auto;
  border-radius: 10px;
`;
export default AddPage;
