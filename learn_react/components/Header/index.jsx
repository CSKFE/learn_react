import React from 'react'
import { Head, List, ToggleButton } from './styles'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Head>
      <ToggleButton />
      <Link to='/'>
        <h1>나는 사이드 바</h1>
      </Link>
      <nav>
        <List>
          <li>
            <Link to='/layouts/page1'>페이지1</Link>
          </li>
          <li>
            <Link to='/layouts/page2'>페이지2</Link>
          </li>
          <li>
            <Link to='/layouts/page3'>페이지3</Link>
          </li>
          <li>
            <Link to='/layouts/page4'>페이지4</Link>
          </li>
        </List>
      </nav>
    </Head>
  )
}

export default Header
