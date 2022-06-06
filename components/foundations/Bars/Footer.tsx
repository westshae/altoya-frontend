//Package imports
import styled from "styled-components";

//CSS for footer
const StyledFooter = styled.div`
    height:5rem;
    background-color:transparent;
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    width:100vw;
    bottom: 0px;
    left: 0px;
`

//Component returned
const Footer = () =>{
    return(
        <StyledFooter>
        </StyledFooter>
    )
}

export default Footer;