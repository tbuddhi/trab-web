import React from "react";
import styled from 'styled-components'


const SidebarNav = styled.div`
    height: 100% !important;
    display: flex;
    flex-direction: column;
    border-right: 1px solid;
    border-radius: 0;
    border-color: rgba(64, 194, 133, 0.693);
    background-color: rgb(255, 255, 255);
    transition: 0.8s ease;
`
const ToogleB = styled.button`
    height: 50px;
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 9rem;
    width: 10px;
    position: absolute;
    outline: none;
    z-index: 1;
    background-color: rgba(64, 194, 133, 0.693);
    border-color: rgba(64, 194, 133, 0.693);
    border-left: 0;
`
export const Sidebar2 = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
      console.log(xPosition)
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);
  return (
    <>
      <SidebarNav
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: 100,
          minHeight: height
        }}
      >
        <ToogleB
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`
          }}
        ></ToogleB>
        <div className="content">{children}</div>
      </SidebarNav>
    </>
  );
};