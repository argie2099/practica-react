import './Styles/Styles.scss'
// SE IMPORTAN LOS COMPONENTES A UTILIZAR
import Home from './components/organismos/Home'
import Shop from './components/organismos/Shop'
import About from './components/organismos/About'
import Nav from './components/organismos/Nav'
import Users from './components/Users'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => (
    <>
    <Router>
    <Nav />
        <Route path="/" exact component={Home} />
        <Switch >
            <Route path="/shop" component={Shop} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
        </Switch>
    </Router>
    </>
)

export default App;
