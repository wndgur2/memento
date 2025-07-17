import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

export interface ILayoutProps {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 720px;
  margin: 0 auto;
  background-color: #f0f0f0;
`

const Header = styled.header`
  background-color: #eee;
  padding: 10px;
  text-align: center;
`

const Main = styled.main`
  padding: 20px;
`

const NavigationBar = styled.footer`
  background-color: #e33;
  padding: 10px;
  text-align: center;
`

export default function Layout() {
  return (
    <Container>
      <Header>Header</Header>
      <Main>
        <Outlet />
      </Main>
      <NavigationBar>Naviation bar</NavigationBar>
    </Container>
  )
}
