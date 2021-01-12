import './App.css';
// SE IMPORTAN LOS COMPONENTES A UTILIZAR
import Card from './components/Card'
import userForm from './components/userForm';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={userForm} />
            <Route path="/cards" exact component={()=> <Card />} />
            <Route component={()=> (
                <div>ERROR 404</div>
            )} />
        </Switch>
    </Router>
)

export default App;
