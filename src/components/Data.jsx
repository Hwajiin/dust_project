import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.p`
  font-size: 80px;
`;

const Text = styled.span`
  font-weight: 700;
  margin: 10px 0;
`;

const Data = styled.div`
  margin-bottom: 10px;
`;

const City = styled.span`
  margin-right: 10px;
`;

const DustResult = styled.span``;

const Datatime = styled.span`
  font-size: 11px;
`;

const standard = (result) => {
  const parsedResult = parseInt(result);
  if (parsedResult <= 30) {
    return { text: "좋아요", color: "#A3CB38", emoji: "😆" };
  } else if (parsedResult > 30 && parsedResult <= 80) {
    return { text: "보통입니다", color: "#FFC312", emoji: "🙂" };
  } else if (parsedResult > 80 && parsedResult < 150) {
    return { text: "나빠요", color: "#EE5A24", emoji: "😣" };
  } else {
    return { text: "메우 나빠요", color: "#D980FA", emoji: "😱" };
  }
};

export default ({ datatime, sidoName, fineDustResult }) => {
  return (
    <Container color={standard(fineDustResult).color}>
      <Emoji>{standard(fineDustResult).emoji}</Emoji>
      <Text>{standard(fineDustResult).text}</Text>
      <Data>
        <City>{sidoName}</City>
        <DustResult>{fineDustResult}㎍/㎥</DustResult>
      </Data>
      <Datatime>{datatime}</Datatime>
    </Container>
  );
};
