import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import User from './components/User';

function App() {
	return (
		<Router>
			<div className='container mt-5'>
				<div className='btn-group'>
					<NavLink
						to='/'
						exact
						className='btn btn-primary'
						activeClassName='active'
					>
						Inicio
					</NavLink>

					<NavLink
						to='/nosotros'
						exact
						className='btn btn-primary'
						activeClassName='active'
					>
						Nosotros
					</NavLink>

					<NavLink
						to='/contact'
						exact
						className='btn btn-primary'
						activeClassName='active'
					>
						Contacto
					</NavLink>
				</div>
				<hr />
				<Switch>
					<Route path='/nosotros/:id'>
						<User />
					</Route>

					<Route path='/nosotros'>
						<Nosotros />
					</Route>

					<Route path='/contact'>
						<Contacto />
					</Route>

					<Route path='/'>
						<Inicio />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
