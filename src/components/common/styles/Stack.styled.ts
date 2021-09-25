import styled from "styled-components";

export const Stack = styled.div`
  overflow: auto;
  height: 90%;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #EAE8E9;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #C4C2C4;
    border-radius: 4px;
  }
`