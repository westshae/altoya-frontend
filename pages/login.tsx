import type { NextPage } from 'next'
import Navigation from '../components/foundations/Bars/Navigation'
import Footer from '../components/foundations/Bars/Footer'
import { Container, Content } from '../components/foundations/Containers'
import FormDiv from '../components/foundations/Forms/FormDiv'
import FormInput from '../components/foundations/Forms/FormInput'

const submitFunctionTest = (e:any) =>{
  console.log("testing");
}
const Login: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>Login</h1>
        <FormDiv >
          <FormInput type="text" label="label1" id="id1"/>
          <FormInput type="submit" label="Submit" id="submit1" submitFunction={submitFunctionTest}/>
        </FormDiv>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Login
