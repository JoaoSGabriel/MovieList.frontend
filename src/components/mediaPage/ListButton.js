import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export default function ListButton() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrappler
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      Listar
      <Menu>
        <IoIosArrowDown />
        <MenuDropDown ref={dropdownRef} isActive={isActive}>
          <span>Marcar como assistido</span>
          <span>Marcar como planejando</span>
        </MenuDropDown>
      </Menu>
    </Wrappler>
  );
}

const Wrappler = styled.div`
  width: 160px;
  height: 35px;
  padding: 0 20px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 240px;
  left: calc(-215px);
  background: rgb(61, 180, 242);
  border-radius: 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const Menu = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MenuDropDown = styled.div`
  width: 160px;
  padding: 10px 0;
  background: rgb(61, 180, 242);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 40px;
  right: -20px;
  z-index: 1;

  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isActive ? "translateY(0)" : "translateY(-3px);"};

  span {
    width: 80%;
    display: flex;
    align-items: center;
    margin: 8px 0;
    text-align: center;
    font-size: 0.9rem;
    letter-spacing: 0.03rem;

    :hover {
      transform: scale(1.1);
    }
  }
`;
