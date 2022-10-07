import styled from "styled-components";
import { CircularImage } from "./Components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f0f0f0;
`;

export const Candidato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 400px;
  margin: 10px;
`;

export const StyledImage = styled(CircularImage)`
  margin-top: 20px;
  margin-bottom: 20px;
`;
