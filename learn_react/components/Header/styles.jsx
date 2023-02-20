import styled from 'styled-components'
export const Head = styled.header`
  display: flex;
  flex-direction: column;
  padding: 15px;
  height: 100%;
  border-right: 1px solid green;
  width: 240px;
  h1 {
    font-size: 24px;
    line-height: 1.5em;
  }
`

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const ToggleButton = styled.button`
  &::before, &::after {
    content: '';

  }
`
