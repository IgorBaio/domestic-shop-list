import styled from 'styled-components';

interface DataTextProps {
  isTitle?: boolean;
  checked?: boolean;
}

export const Container = styled.div`
  position: relative;
  /* margin-top:1.5rem; */
  width: 100%;
  border-bottom: 1px solid #FFF;
  /* height: 100%; */
  /* padding: 1rem; */
  /* background-color: #000; */
margin-bottom: 1rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* margin-top: 1rem; */
`;

export const CheckboxLabel = styled.label<DataTextProps>`
  font-size: 1.2rem;
  color: ${({ checked }: DataTextProps) => !!checked ? 'green' : '#FFF'};
  text-decoration: ${({ checked }: DataTextProps) => !!checked ? 'line-through' : 'none'};
  
  /* margin-left: 1rem; */
`;

export const Checkbox = styled.input`
  width: 1.0rem;
  height: 1.0rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: #6a0572;
`;

export const DeleteButton = styled.button`
position: absolute;
right: 10%;
top:0.2rem;
/* margin-left: 1rem; */
padding: 0.5rem;
background-color: #6a0572;
color: #FFF;
border: none;
cursor: pointer;
border-radius: 5px;
width: 48px;
`;

export const EditButton = styled.button`
 position: absolute;
right: 10%;
top:3rem;
  padding: 0.5rem;
  background-color: #6a0572;
  color: #FFF;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 1rem;
  width: 70%;
`;

export const DataText = styled.p<DataTextProps>`
  color: ${({ checked }: DataTextProps) => !!checked ? 'green' : '#FFF'};
  text-decoration: ${({ checked }: DataTextProps) => !!checked ? 'line-through' : 'none'};
  
  font-size: 0.8rem;
  margin-left: 5px;
  font-weight: ${({ isTitle }) => isTitle ? 'bold' : 'normal'};
  height: 24px !important;
  font-style: italic;

`;

export const DataSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  padding: 0%;
  position: relative;
  height: 24px !important;
`;

export const FloatAddButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  padding: 0.5rem;
  background-color:transparent;
  color: #FFF;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  z-index: 1000;

`;

export const CheckboxArea = styled.div`
  width: 1.0rem;
  height: 1.0rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 20%;
  background-color: #6a0572;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`

export const CheckboxItem = styled.div<DataTextProps>`
  width: 0.8rem;
  height: 0.8rem;
  /* margin-left: 1rem; */
  cursor: pointer;
  border-radius: 20%;
  background-color: ${({ checked }: DataTextProps) => !!checked ? '#6a0572' : '#FFF'};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CheckboxMarked = styled.span`
  color: green;
  font-size: 14px;
  font-weight: bold;
`