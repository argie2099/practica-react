import './Styles/Styles.scss'
// SE IMPORTAN LOS COMPONENTES A UTILIZAR
import home from './components/organismos/home'
import shop from './components/organismos/shop'
import about from './components/organismos/about'
import Nav from './components/organismos/Nav'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => (
    <>
    <Nav />
    <Router>
        <Route path="/" exact component={home} />
        <Switch >
            <Route path="/shop" component={shop} />
            <Route path="/about" component={about} />
        </Switch>
    </Router>
    </>
)

export default App;
