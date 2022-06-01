import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {deleteWordFB} from "./redux/modules/word" 
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const Main = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const word_list = useSelector((state) => state.word.list);
  // let word_index = parseInt(props.match.params.index);
  return (
    <Wrap>
      <Title>MY DICTIONARY</Title>
      <CardWrap>
        {word_list &&
          // React 는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행하기 때문이다.
          // 즉 React는 return에서 articles.map(...)을 반복실행할 때 첫 턴에 데이터가 아직 안들어와도 렌더링이 실행되며 당연히 그 데이터는 undefined로 정의되어 오류가 나는 것이다.
          // 따라서 && 붙여서  true && expression은 항상 expression으로 실행되고 false && expression은 항상 false로 실행된다. 따라서 조건이 참이면 && 바로 뒤의 요소가 출력에 나타난다
          word_list.map((list, idx) => {
            return (
              <CardBox key={idx}>
                <div>
                  <IconButton
                    aria-label="delete"
                    style={{
                      position: "absolute",
                      right: "550px",
                    }}
                    onClick={() => {
                      // console.log(삭제하기 버튼을 눌렀어!);
                      // dispatch(deleteWord(idx));
                      dispatch(deleteWordFB(word_list[idx].id));
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
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
                </div>
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
  height: 100%;
  margin: auto;
`;
const Title = styled.h1``;
const CardWrap = styled.div``;
const CardBox = styled.div`
  background-color: #fff;
  width: 30rem;
  height: 15rem;
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 10px;
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
