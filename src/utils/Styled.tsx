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

export const Timers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Timer = styled.div`
  border: 1px solid gray;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  width: 95%;
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

export const TimeInput = styled.input`
  background-color: #f0f0f0;
  border: 1px solid gray;
  border-radius: 5px;
  
  text-align: center;
  width: 50px;
  margin: 5px;
`;
