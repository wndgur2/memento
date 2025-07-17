import type { Theme } from '@emotion/react'
import { css, useTheme } from '@emotion/react'
import { Outlet } from 'react-router-dom'

export interface ILayoutProps {}

export default function Layout() {
  const theme = useTheme()
  return (
    <div css={containerStyle}>
      <header css={headerStyle}>Header</header>
      <main css={[mainStyle]}>
        <h1 css={{ color: theme.sky[500] }}>main</h1>
        <Outlet />
      </main>
      <footer css={footerStyle}>Naviation bar</footer>
    </div>
  )
}

const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  maxWidth: '720px',
  margin: '0 auto',
  backgroundColor: '#f0f0f0',
})

const headerStyle = (theme: Theme) =>
  css({
    backgroundColor: '#a33',
    padding: '10px',
    textAlign: 'center',
    color: theme.sky[500],
  })

const mainStyle = (theme: Theme) =>
  css({
    padding: '20px',
    border: '4px solid #000',
    color: theme.stone[900],
    backgroundColor: theme.bg,
  })

const footerStyle = css({
  backgroundColor: '#a33',
  padding: '10px',
  textAlign: 'center',
})

// Exporting the styles for potential reuse
export { containerStyle, headerStyle, footerStyle }
