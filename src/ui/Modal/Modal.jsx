/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { useClick } from "../../hooks/useClick";
import styled from "styled-components";
import { createPortal } from "react-dom";
const StyledModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  padding: 2.3rem;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255 255 255 / 30%);
  backdrop-filter: blur(1px);
`;

const Warning = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #3a4374;
`;
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = (name) => setOpenName(name);
  const close = () => setOpenName("");
  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, text }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        {text ? <Warning>{text}</Warning> : null}
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.getElementById("modal")
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
