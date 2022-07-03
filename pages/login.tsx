import type { NextPage } from 'next'
import Navigation from '../components/foundations/Bars/Navigation'
import Footer from '../components/foundations/Bars/Footer'
import { Container, Content } from '../components/foundations/Containers'
import FormDiv from '../components/foundations/Forms/FormDiv'
import FormInput from '../components/foundations/Forms/FormInput'
const Login: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>Login</h1>
        <FormDiv>
          <FormInput type="text" label="label1" id="id1"/>
        </FormDiv>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Login
