import styled from "styled-components";

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

const FormTextInput = () => {
  return <StyledFormTextInput />;
};
const FormSubmitInput = () => {
  return <StyledFormSubmitInput />;
};
const FormButtonInput = () => {
  return <StyledFormButtonInput />;
};
const FormCheckboxInput = () => {
  return <StyledFormCheckboxInput />;
};


export {FormTextInput, FormSubmitInput, FormButtonInput, FormCheckboxInput};
