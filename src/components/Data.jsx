import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
`;

export default ({ datatime, sidoName, fineDustResult }) => {
  const standard = (result) => {
    const parsedResult = parseInt(result);
    if (parsedResult <= 30) {
      return { text: "좋아요", color: "green" };
    } else if (parsedResult > 30 && parsedResult <= 80) {
      return { text: "보통입니다", color: "yellow" };
    } else if (parsedResult > 80 && parsedResult < 150) {
      return { text: "나빠요", color: "red" };
    } else {
      return { text: "메우 나빠요", color: "violet" };
    }
  };

  return (
    <Container color={standard(fineDustResult).color}>
      <h1>{datatime}</h1>
      <h2>{sidoName}</h2>
      <h3>{fineDustResult}</h3>
    </Container>
  );
};
