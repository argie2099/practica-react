import './Styles/Styles.scss'
// SE IMPORTAN LOS COMPONENTES A UTILIZAR
import Home from './components/Pages/Home'
import Shop from './components/Pages/Shop'
import About from './components/Pages/About'
import Users from './components/Pages/Users'
import Course from './components/Pages/Course'
import Nav from './components/Moleculas/Nav'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => (
    <>
    <Router>
        <Nav />
            <Route path="/" exact component={Home} />
            <Switch >
                <Route path="/shop" exact component={Shop} />
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
                <Route path="/shop/:id" component={Course} />
            </Switch>
    </Router>
    </>
)

export default App;
