import React, { useState } from "react";
import { registrarPresenca } from "../../services/usuarioService";
import type { tbPresenca } from "../../graphql/ApiTypes";

export const RegistrarPresenca: React.FC = () => {
	const [ qrcode, setQrcode ] = useState("");
	const [ loading, setLoading ] = useState(false);
	const [ resultado, setResultado ] = useState<tbPresenca | null>(null);
	const [ erro, setErro ] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!qrcode.trim()) {
			setErro("Digite o código QR");
			return;
		}

		try {
			setLoading(true);
			setErro(null);
			setResultado(null);

			const presenca = await registrarPresenca(qrcode);
			setResultado(presenca);
			setQrcode(""); // Limpa o campo
		} catch (error) {
			setErro("Erro ao registrar presença. Verifique o código QR.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
			<h1>Registrar Presença</h1>

			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: "16px" }}>
					<label htmlFor="qrcode" style={{ display: "block", marginBottom: "8px" }}>
						Código QR da Aula:
					</label>
					<input
						id="qrcode"
						type="text"
						value={qrcode}
						onChange={(e) => setQrcode(e.target.value)}
						placeholder="Cole ou digite o código QR"
						style={{
							width: "100%",
							padding: "8px",
							fontSize: "16px",
							border: "1px solid #ccc",
							borderRadius: "4px",
						}}
						disabled={loading}
					/>
				</div>

				<button
					type="submit"
					disabled={loading}
					style={{
						padding: "12px 24px",
						fontSize: "16px",
						backgroundColor: loading ? "#ccc" : "#007bff",
						color: "white",
						border: "none",
						borderRadius: "4px",
						cursor: loading ? "not-allowed" : "pointer",
					}}
				>
					{loading ? "Registrando..." : "Registrar Presença"}
				</button>
			</form>

			{erro && (
				<div
					style={{
						marginTop: "16px",
						padding: "12px",
						backgroundColor: "#ffebee",
						color: "#c62828",
						borderRadius: "4px",
					}}
				>
					{erro}
				</div>
			)}

			{resultado && (
				<div
					style={{
						marginTop: "16px",
						padding: "16px",
						backgroundColor: "#e8f5e9",
						color: "#2e7d32",
						borderRadius: "4px",
					}}
				>
					<h3>✅ Presença registrada com sucesso!</h3>
					<p>
						<strong>Aluno:</strong> {resultado.aluno?.nome} ({resultado.alunoEmail})
					</p>
					<p>
						<strong>Tipo:</strong> {resultado.tipo}
					</p>
					<p>
						<strong>Status:</strong> {resultado.presente ? "Presente" : "Ausente"}
					</p>
					{resultado.aula && (
						<p>
							<strong>Aula:</strong> {resultado.aula.turma?.nome}
						</p>
					)}
				</div>
			)}
		</div>
	);
};
