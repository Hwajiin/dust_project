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
    return { text: "μ’μμ", color: "#A3CB38", emoji: "π" };
  } else if (parsedResult > 30 && parsedResult <= 80) {
    return { text: "λ³΄ν΅μλλ€", color: "#FFC312", emoji: "π" };
  } else if (parsedResult > 80 && parsedResult < 150) {
    return { text: "λλΉ μ", color: "#EE5A24", emoji: "π£" };
  } else {
    return { text: "λ©μ° λλΉ μ", color: "#D980FA", emoji: "π±" };
  }
};

export default ({ datatime, sidoName, fineDustResult }) => {
  return (
    <Container color={standard(fineDustResult).color}>
      <Emoji>{standard(fineDustResult).emoji}</Emoji>
      <Text>{standard(fineDustResult).text}</Text>
      <Data>
        <City>{sidoName}</City>
        <DustResult>{fineDustResult}γ/γ₯</DustResult>
      </Data>
      <Datatime>{datatime}</Datatime>
    </Container>
  );
};
