import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ViewRoutes } from './routes'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {ViewRoutes.map(({ path, exact, component }, key) => {
          return (
            <Route key={key} exact={exact} path={path}>
              {component}
            </Route>
          )
        })}
      </Switch>
    </Router>
  )
}

export default App
