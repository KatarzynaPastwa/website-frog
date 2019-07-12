import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css'
import App from './App'


const Root = props => {
  return (
    <Router>
      <div>
     
      </div>
      <div>
        <Switch>
          <Route exact path='/' component={App} />
        </Switch>
      </div>
      <div>

      </div>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

