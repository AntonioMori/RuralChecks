import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsuario } from "../../services/usuarioService";
import type { tbUsuarios } from "../../graphql/ApiTypes";

// Componente interno que gerencia o estado após autenticação
const AuthenticatedContent = ({ user, signOut }: { user: any; signOut?: () => void }) => {
	const navigate = useNavigate();
	const [ userData, setUserData ] = useState<tbUsuarios | null>(null);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		if (user?.signInDetails?.loginId) {
			const carregarDadosUsuario = async () => {
				try {
					setLoading(true);
					const dados = await fetchUsuario(user.signInDetails.loginId);
					setUserData(dados ?? null);

					// Redireciona para home após carregar dados
					if (dados) {
						navigate("/home");
					}
				} catch (error) {
					console.error("Erro ao carregar dados do usuário:", error);
				} finally {
					setLoading(false);
				}
			};

			carregarDadosUsuario();
		}
	}, [ user, navigate ]);

	if (loading) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					minHeight: "100vh",
				}}
			>
				<h2>Carregando seus dados...</h2>
				<p>Aguarde um momento</p>
			</div>
		);
	}

	return (
		<div
			style={{
				padding: "40px",
				maxWidth: "800px",
				margin: "0 auto",
			}}
		>
			<div
				style={{
					backgroundColor: "#f5f5f5",
					padding: "24px",
					borderRadius: "8px",
					marginBottom: "20px",
				}}
			>
				<h1 style={{ margin: "0 0 16px 0" }}>
					Bem-vindo, {userData?.nome || user?.username}!
				</h1>
				<p style={{ margin: 0, color: "#666" }}>
					<strong>Email:</strong> {user?.signInDetails?.loginId}
				</p>
				{userData && (
					<>
						<p style={{ margin: "8px 0 0 0", color: "#666" }}>
							<strong>Cargo:</strong> {userData.cargo}
						</p>
						<p style={{ margin: "8px 0 0 0", color: "#666" }}>
							<strong>Status:</strong>{" "}
							{userData.conta_ativa ? "Ativa ✅" : "Inativa ❌"}
						</p>
					</>
				)}
			</div>

			<div>
				<h2>O que você gostaria de fazer?</h2>
				<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
					<button
						onClick={() => navigate("/turmas")}
						style={{
							padding: "12px 24px",
							fontSize: "16px",
							backgroundColor: "#1976d2",
							color: "white",
							border: "none",
							borderRadius: "4px",
							cursor: "pointer",
						}}
					>
						Ver Turmas
					</button>

					<button
						onClick={() => navigate("/presenca")}
						style={{
							padding: "12px 24px",
							fontSize: "16px",
							backgroundColor: "#2e7d32",
							color: "white",
							border: "none",
							borderRadius: "4px",
							cursor: "pointer",
						}}
					>
						Registrar Presença
					</button>

					<button
						onClick={() => signOut?.()}
						style={{
							padding: "12px 24px",
							fontSize: "16px",
							backgroundColor: "#d32f2f",
							color: "white",
							border: "none",
							borderRadius: "4px",
							cursor: "pointer",
						}}
					>
						Sair
					</button>
				</div>
			</div>
		</div>
	);
};

const Login = () => {
	return (
		<Authenticator
			loginMechanisms={[ "email" ]}
			formFields={{
				signIn: {
					username: {
						placeholder: "Digite seu e-mail institucional",
						label: "E-mail",
						type: "email",
					},
					password: {
						placeholder: "Digite sua senha",
						label: "Senha",
					},
				},
				signUp: {
					email: {
						label: "E-mail Institucional",
						placeholder: "seu.email@instituicao.edu",
						type: "email",
						isRequired: true,
					},
					password: {
						label: "Senha",
						placeholder: "Mínimo 8 caracteres",
						isRequired: true,
					},
					confirm_password: {
						label: "Confirmar Senha",
						placeholder: "Confirme sua senha",
						isRequired: true,
					},
				},
			}}
			components={{
				SignIn: {
					Header() {
						return (
							<div style={{ textAlign: "center", padding: "20px" }}>
								<h2 style={{ margin: 0, color: "#1976d2" }}>
									Sistema de Presença
								</h2>
								<p style={{ color: "#666", marginTop: "8px" }}>
									Entre com suas credenciais
								</p>
							</div>
						);
					},
					Footer() {
						return (
							<div style={{ textAlign: "center", padding: "16px" }}>
								<p style={{ fontSize: "14px", color: "#666" }}>
									Não tem uma conta? Clique em &quot;Criar conta&quot; abaixo
								</p>
							</div>
						);
					},
				},
				SignUp: {
					Header() {
						return (
							<div style={{ textAlign: "center", padding: "20px" }}>
								<h2 style={{ margin: 0, color: "#1976d2" }}>
									Criar Nova Conta
								</h2>
								<p style={{ color: "#666", marginTop: "8px" }}>
									Use seu e-mail institucional
								</p>
							</div>
						);
					},
					Footer() {
						return (
							<div style={{ textAlign: "center", padding: "16px" }}>
								<p style={{ fontSize: "14px", color: "#666" }}>
									Já tem uma conta? Clique em &quot;Voltar para entrar&quot;
								</p>
							</div>
						);
					},
				},
			}}
		>
			{({ signOut, user }) => (
				<AuthenticatedContent user={user} signOut={signOut} />
			)}
		</Authenticator>
	);
};

export default Login;
