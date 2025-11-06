import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "@/assets/react.svg";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";



export default function Home() {
	console.log("Componente Home montado!");
	const [ count, setCount ] = useState(0);

	return (

		<>
			<div>
				<a href={"https://vite.dev"} target={"_blank"} rel={"noreferrer"}>
					<img
						src={viteLogo}
						className="logo"
						style={{}}
						alt="vite logo"
					/>
				</a>
				<a href={"https://react.dev"} target={"_blank"} rel={"noreferrer"}>
					<img src={reactLogo} className={"logo react"} alt={"React logo"} />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div>
				<button onClick={() => setCount((count: number) => count + 1)}>
					count is {count}
				</button>

				<p>
					Edit <code>src/App.tsx </code> and save to test HMR
				</p>
			</div>

			<p className={"read-the-docs"}>
				<div>
					Protótipo <strong>V.2</strong>
				</div>
				Click on the Vite and React logos to learn more
			</p>

			<Grid
				container
				spacing={2}
				justifyContent="center"
				alignItems="center"
			>

				<Grid size={{ xs: 6, md: 12 }}>
					<Typography variant="h4" component="h1" gutterBottom>
						MATERIAL UI
					</Typography>
				</Grid>

				<Grid size={{ xs: 6, md: 12 }}>
					<Button
						onClick={() => alert("Botão clicado!")}
						variant="contained"
					>
						Aperte para exibir um alerta
					</Button>
				</Grid>

			</Grid>
		</>
	);
}

