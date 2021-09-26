import styled from "styled-components";
import { Card } from "../../common/styles/Card.styled";
import { H3 } from "../../common/styles/typography/Headline.styled";
import {P3} from "../../common/styles/typography/Paragraph.styled";

interface NewsItemProps {
    color?: string
}

export const NewsItem = styled(Card)<NewsItemProps>`
  display: flex;
  background-color: ${({color}) => color || "rgba(196, 194, 196, 0.15)"};
  margin: 0 24px 16px 0;
  padding: 24px 0 24px 24px;
`

export const NewsInfo = styled(H3)`
  display: flex;
  font-style: normal;
  margin: 0;
  font-weight: 600;
  font-size: 16px;
`

export const NewsDate = styled(P3)`
  color: #C4C2C4;
`

export const NewsDescriptionBox = styled(P3)`
  margin: 16px 0 32px 0;
  color: #4B4C4F;
`

export const NewsPicture = styled.img`
  width: 80px;
  height: 80px;
  border: none;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  right: -8px;
  background: transparent;
`