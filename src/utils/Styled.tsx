import styled from 'styled-components';

export const AddViewDiv = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerWrapper = styled.div`
  border: 1px solid gray;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  width: 15%;
`;

export const TimerTitle = styled.div`
  font-weight: bold;
  text-align: right;
  padding-right: 15px;
  color: white;
  border-radius: 10px 10px 0px 0px;
  background-color: #314155;
`;

export const Timer = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  width: 95%;
  height: 220px;
`;

export const RemoveButtonStyle = styled.button`
  background-color: #314155;
  background-color #314100;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1px;
  margin: 5px;
  font-size: 1rem;
  float: left;
  &:hover {
    background-color: white;
  }
`;
