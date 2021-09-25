import React from 'react';
import styled from "styled-components";
import FolderIcon, {SiProgress} from "../../common/icon/SiProgress";

const RequestItem = styled.div`
  display: flex;
  border-radius: 16px;
  background-color: rgba(198, 204, 236, 0.2);
  margin: 0 24px 8px 0;
  padding: 24px 0 24px 0;
  align-items: center;
  
  > * {
    &:last-child {

      justify-content: flex-end
    }
  }
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

const Indicator = styled.div`
  background-color: #3454D1;;
  width: 4px;
  height: 40px;
  border-radius: 0px 4px 4px 0px;
  box-shadow: 0px 0px 24px 4px #3454D1;
  margin-right: 36px;
`

const RequestCard = () => {
    return (
        <RequestItem>
            <Indicator />
            <div>
                <RequestHeader>Не работает вентиляция</RequestHeader>
                <RequestInfo>
                    <div>Офис 2109</div>
                    <div>• 21.02.2021 12:19</div>
                </RequestInfo>
            </div>
        </RequestItem>
    );
};

export default RequestCard;