import styled, {css} from "styled-components";


export const SelectContainer = styled.div`
  display: inline-block;
  position: relative;
  min-width: 232px;
`
export const SelectButton = styled.div<{ isShow: boolean }>`
  display: flex;
  box-shadow: 0 6px 12px -6px rgba(18, 20, 23, 0.12), 0px 8px 24px -4px rgba(18, 20, 23, 0.08);
  border-radius: 12px;
  background: #3454D1;
  height: 40px;
  align-items: center;
  color: #F6F4F5;
  padding-left: 18px;
  padding-right: 14px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  user-select: none;

  > * {
    &:first-child {
      margin-right: 10px;
    }

    &:last-child {
      margin-right: 0;
      margin-left: auto;
      transform: ${({isShow}) => (isShow ? 'rotate(180deg)' : "none")
      }
    }
`

export const SelectOptions = styled.ul<{ isShow: boolean }>`
  position: absolute;
  box-shadow: 0 6px 14px -6px rgba(18, 20, 23, 0.12), 0px 10px 32px -4px rgba(18, 20, 23, 0.1);
  border-radius: 16px;
  margin-top: 7px;
  width: 100%;
  background: #F6F4F5;
  padding: inherit;
  visibility: ${props => (props.isShow ? "visible" : "hidden")};

  li {
    list-style-type: none;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    :hover {
      background: #C6CCEC;
      color: #3454D1;
    }

    :active {
      background: #3454D1;
      color: #F6F4F5;
    }
  }
  
  ${({isShow}) => isShow && css`
    min-height: 50px;
    opacity: 1;
    visibility: visible;
  `}
  
  div {
    padding: 16px 12px;
  }
`
