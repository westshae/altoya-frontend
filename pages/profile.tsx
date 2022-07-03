import type { NextPage } from 'next'
import Navigation from '../components/foundations/Bars/Navigation'
import Footer from '../components/foundations/Bars/Footer'
import { Container, Content } from '../components/foundations/Containers'
const Profile: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>Profile</h1>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Profile
