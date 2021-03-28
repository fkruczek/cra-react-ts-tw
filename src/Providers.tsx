import React, { ReactElement, ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactQueryProvider from './components/ReactQueryProvider'

interface Props {
  children?: ReactNode
}

const Providers = ({ children }: Props): ReactElement => (
  <ReactQueryProvider>
    <Router>{children}</Router>
  </ReactQueryProvider>
)

export default Providers
