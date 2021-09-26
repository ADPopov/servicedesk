import styled from "styled-components";
import {H2, H3} from "./typography/Headline.styled";

export const Card = styled.div`
  border-radius: 16px;
  cursor: pointer;
  background: rgba(196, 194, 196, 0.15);
  align-items: center;
  margin-bottom: 8px;
`

export const CardHeader = styled(H3)`
  color: #121417;
`