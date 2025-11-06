import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import ProjectTheme from "@/themes/ProjectTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

function App() {
	const [ teste ] = useState([ 1, 2, 3, 4, 5 ]);

	console.log("teste", teste);

	const arrowFunctionTeste = () => {
		return null;
	};
	const teste2 = () => {
		return null;
	};
	console.log(teste2);

	console.log("arrowFunctionTeste", arrowFunctionTeste);

	return (
		<Router>
			<ThemeProvider theme={ProjectTheme}>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</main>
			</ThemeProvider>
			<Box />
		</Router>
	);
}

export default App;


