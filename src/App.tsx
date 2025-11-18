import { ThemeProvider } from "@mui/material";
import ProjectTheme from "@/themes/ProjectTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Login from "./pages/Login/Login";

function App() {
	

	return (
		<Router>
			<ThemeProvider theme={ProjectTheme}>
				<main>
					<Routes>
						<Route path='/' element={<Login />} />
					</Routes>
				</main>
			</ThemeProvider>
			<Box />
		</Router>
	);
}

export default App;


