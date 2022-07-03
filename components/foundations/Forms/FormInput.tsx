import styled from "styled-components";

const InputGroup = styled.div`
  position:relative;
`;

const StyledLabel = styled.label`

`;

const StyledFormTextInput = styled.input.attrs({ type: "text" })`
  background-color: purple;
`;
const StyledFormSubmitInput = styled.input.attrs({ type: "submit" })`
  background-color: purple;
`;
const StyledFormButtonInput = styled.input.attrs({ type: "button" })`
  background-color: purple;
`;
const StyledFormCheckboxInput = styled.input.attrs({ type: "checkbox" })`
  background-color: purple;
`;

const FormInput = (props:any) => {
  switch(props.type){
    case "text":
      return (
        <InputGroup>
            <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
          <StyledFormTextInput id={props.id}/>
        </InputGroup>
      );

      case "submit":
        return (
          <InputGroup>
            <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
            <StyledFormSubmitInput id={props.id}/>
          </InputGroup>
        );
      
      case "button":
      return (
        <InputGroup>
            <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
          <StyledFormButtonInput id={props.id}/>
        </InputGroup>
      );

      case "checkbox":
      return (
        <InputGroup>
            <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
          <StyledFormCheckboxInput id={props.id}/>
        </InputGroup>
      );
  }
  return <StyledFormTextInput id={props.id}/>;
};


export default FormInput;
