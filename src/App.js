import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Home'
import Dashboard from './DashBoard/Dashboard'
import Layout from './components/Layout/Layout'
import { TodoListsContextProvider } from './store/todo-context'

function App() {
  return (
    <TodoListsContextProvider>
      <Router>
        <Switch>
          <Layout>
            <Route path='/' component={HomePage} exact />
            <Route path='/dashboard' component={Dashboard} />
          </Layout>
        </Switch>
      </Router>
    </TodoListsContextProvider>
  );
}

export default App;
