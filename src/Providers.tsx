import React, { ReactElement, ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

interface Props {
  children?: ReactNode
}

const Providers = ({ children }: Props): ReactElement => {
  return <Router>{children} </Router>
}

export default Providers
