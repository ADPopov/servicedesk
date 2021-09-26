import styled from "styled-components";
import {Card} from "../../common/styles/Card.styled";
import { H3 } from "../../common/styles/typography/Headline.styled";
import {P3} from "../../common/styles/typography/Paragraph.styled";

interface RequestItemProps {
    color?: string
}

export const RequestItem = styled(Card)<RequestItemProps>`
  display: flex;
  background-color: ${({color}) => color || "rgba(196, 194, 196, 0.15)"};
  margin: 0 24px 8px 0;
  padding: 24px 0 20px 0;
`

export const Place = styled(P3)`
  color: #6F6F72;
`

export const RequestHeader = styled(H3)`
  color: #121417;
`

export const Date = styled(P3)`
  color: #C4C2C4;
  margin-left: 4px;
`

export const IndicateIcon = styled.div`
  margin-left: auto;
  margin-right: 0;
`

export const RequestInfo = styled.h3`
  display: flex;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin: 7px 0;
`

interface IndicatorStateProps {
    color: string
}

export const IndicatorState = styled.div<IndicatorStateProps>`
  background-color: ${({color}) => color};
  width: 4px;
  height: 40px;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 0 24px 4px ${({color}) => color};
  margin-right: 36px;
`