import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import StudyPage from './pages/StudyPage';
import TestPage from './pages/TestPage';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/register" element={<RegisterPage />}></Route>
					<Route path="/study/:id" element={<StudyPage />} />
				</Route>

				<Route path="/test" element={<TestPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
