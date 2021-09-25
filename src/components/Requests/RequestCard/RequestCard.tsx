import React from 'react';
import styled from "styled-components";

const RequestItem = styled.div`
  border-radius: 16px;
  background-color: rgba(198, 204, 236, 0.2);
  margin: 0 24px 8px 0;
  padding: 24px;
`

const RequestHeader = styled.h3`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #121417;
  margin: 0;
`

const RequestInfo = styled.h3`
  display: flex;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin: 7px 0;
  
  div:nth-child(1) {
    color: #6F6F72;
    font-weight: 400;
  }

  div:nth-child(2) {
    margin-left: 4px;
    font-weight: 400;
    color: #C4C2C4;
  }
`

const RequestCard = () => {
    return (
        <RequestItem>
            <RequestHeader>Не работает вентиляция</RequestHeader>
            <RequestInfo>
                <div>Офис 2109</div>
                <div>• 21.02.2021 12:19</div>
            </RequestInfo>
        </RequestItem>
    );
};

export default RequestCard;