import styled from "styled-components";

//Wraps navigation bar, sidebar, footer, content
const Container = styled.div`
    background-color:#faf9f4;
    display:flex;
    flex-direction:row;
    overflow:visible;
    height: 100vh;
`

//Wraps content on page.
const Content = styled.div`
    background-clip:margin-box;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    overflow-x:hidden;
    overflow-y:scroll;
`


export {Container, Content};