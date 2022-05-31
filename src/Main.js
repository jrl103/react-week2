import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { loadWordFB } from "./redux/modules/word";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, [dispatch]);

  const word_list = useSelector((state) => state.word.list);

  return (
    <Wrap>
      
      <Title>MY DICTIONARY</Title>
      <CardWrap>
        {word_list &&
        word_list.map((list, idx) => {
          return (
            <CardBox key={idx}>
              <CardContent>
                <CardTitle>단어</CardTitle>
                <CardText>{list.word}</CardText>
              </CardContent>
              <CardContent>
                <CardTitle>설명</CardTitle>
                <CardText>{list.desc}</CardText>
              </CardContent>
              <CardContent>
                <CardTitle>예시</CardTitle>
                <CardText style={{ color: "blue" }}>{list.ex}</CardText>
              </CardContent>
            </CardBox>
          );
        })}
      </CardWrap>

      <Fab
        onClick={() => {
          history.push("/addpage");
        }}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: aquamarine;
  padding: 16px;
  width: 35vw;
  height: 100vh;
  margin:auto;

`;
const Title = styled.h1``;
const CardWrap = styled.div``;
const CardBox = styled.div`
  background-color: #fff;
  width: 30rem;
  height: 15rem;
  padding: 16px;
  margin-bottom:20px;
  border-radius:10px;
`;
const CardContent = styled.div``;
const CardTitle = styled.h2`
  text-decoration: underline;
  font-size: 13px;
`;

const CardText = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
// const Button = styled.div`
//   position: "absolute";
//   bottom: 0;
//   right: 0;
// `;
export default Main;
