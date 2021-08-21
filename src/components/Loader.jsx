import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1b1464;
  color: white;
`;

const Clock = styled.p`
  font-size: 50px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 15px;
`;

export default () => {
  return (
    <Container>
      <Clock>⏰</Clock>
      <Text>Please Wait a moment...</Text>
    </Container>
  );
};
