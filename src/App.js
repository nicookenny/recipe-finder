import './App.css';

import Button from './components/Button';
import Input from './components/Input';
import Select from './components/Select';
import Header from './pages/Header';
import Home from './pages/Home';

function App() {
	const options = ['hola', 'chau'];
	return (
		<>
			<Header />
			<Home />
		</>
	);
}

export default App;
