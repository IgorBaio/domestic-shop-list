import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
    color: red;
    background-color: #fff;
`;

export const AddContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

export const AddInput = styled.input`
    padding: 0.5rem;
    margin: 1rem;
    border-radius: 5px;
    border: 1px solid #000;
    `;

export const AddButton = styled.button`
    padding: 0.5rem;
    margin: 1rem;
    background-color: #6a0572;
    color: #FFF;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    `;

export const AddForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;        