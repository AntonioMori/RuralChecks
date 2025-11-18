import React, { useEffect, useState } from "react";
import { fetchTurmasAtivas } from "../../services/usuarioService";
import type { tbTurmas } from "../../graphql/ApiTypes";

export const ListarTurmas: React.FC = () => {
	const [ turmas, setTurmas ] = useState<tbTurmas[]>([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState<string | null>(null);

	useEffect(() => {
		const carregarTurmas = async () => {
			try {
				setLoading(true);
				const data = await fetchTurmasAtivas();
				setTurmas(Array.isArray(data) ? data : []);
			} catch (err) {
				setError("Erro ao carregar turmas");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		carregarTurmas();
	}, []);

	if (loading) {
		return <div>Carregando turmas...</div>;
	}

	if (error) {
		return <div style={{ color: "red" }}>{error}</div>;
	}

	return (
		<div>
			<h1>Turmas Ativas</h1>
			{turmas.length === 0
				? (
					<p>Nenhuma turma ativa encontrada.</p>
				)
				: (
					<div>
						{turmas.map((turma) => (
							<div
								key={turma.id}
								style={{
									border: "1px solid #ccc",
									padding: "16px",
									margin: "8px 0",
									borderRadius: "8px",
								}}
							>
								<h2>{turma.nome}</h2>
								<p>{turma.descricao}</p>
								<p>
									<strong>Período:</strong> {turma.periodo}
								</p>
								<p>
									<strong>Professor:</strong> {turma.professorEmail}
								</p>
								{turma.professor && <p>👤 {turma.professor.nome}</p>}
							</div>
						))}
					</div>
				)}
		</div>
	);
};
