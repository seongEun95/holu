import './styles/global.css';
import './styles/reset.css';
import Router from './Router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Provider store={store}>
				<Router />
			</Provider>
		</LocalizationProvider>
	);
}

export default App;
