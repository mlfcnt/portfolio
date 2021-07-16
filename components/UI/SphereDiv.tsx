import styled from 'styled-components'


export const SphereDiv = styled.div<{
    isOpen: boolean,
    backgroundColor: string
}>`
  display: flex;
  justify-content: center;
  border: 2px solid black;
  align-items: center;
  width:  ${props => props.isOpen ? "100vw" : "200px"};
  height: ${props => props.isOpen ? "100vh" : "200px"};
  cursor: pointer;
  margin: 30px;
  transition: all 0.4s;
  transition-timing-function: ease-in;
  &:hover {
    background-color: ${props => props.isOpen ? "inherit" : props.backgroundColor};
  }
`;  