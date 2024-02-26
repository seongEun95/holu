import './styles/global.css';
import './styles/reset.css';
import Router from './Router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Router />
			</LocalizationProvider>
		</>
	);
}

export default App;
