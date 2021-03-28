import React, { ReactElement, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))

const Routes = (): ReactElement => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
    </Switch>
  </Suspense>
)

export default Routes
