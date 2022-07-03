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

//When submit input type is used, passes event and function to be run
//Prevents default action of submit button, then runs function passed
const submitFunction = (e:any, passedFunction:Function) =>{
  e.preventDefault();
  passedFunction();
}

//Determines which type of input is required via props.type
//Connects label to input type, updates submit function if required, returns requested input type
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
            <StyledFormSubmitInput id={props.id} onClick={(e) => submitFunction(e,props.submitFunction)}/>
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
