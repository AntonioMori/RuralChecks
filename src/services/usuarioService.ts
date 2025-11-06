import { generateClient } from "aws-amplify/data";

// Importe as queries e mutations GERADAS automaticamente
import { getTbUsuarios, listTbUsuarios, listTbTurmas, listTbAulas } from "../graphql/queries";
import { createTbPresenca, registrarPresencaQRCode, createTbUsuarios } from "../graphql/mutations";

// Importe os tipos GERADOS automaticamente
import type {
	GetTbUsuariosQuery,
	ListTbUsuariosQuery,
	ListTbTurmasQuery,
	CreateTbPresencaMutation,
	TbUsuariosCargo,
	CreateTbUsuariosInput,
} from "../graphql/";

// Crie o client (Amplify já foi configurado no main.tsx)
const client = generateClient();

// ========================================
// EXEMPLOS DE USO - Queries
// ========================================

/**
 * Buscar usuário por email
 */
export const fetchUsuario = async (email: string) => {
	try {
		const result = await client.graphql({
			query: getTbUsuarios,
			variables: { email },
		});

		return result.data.getTbUsuarios;
	} catch (error) {
		console.error("Erro ao buscar usuário:", error);
		throw error;
	}
};

/**
 * Listar todos os usuários (com filtro opcional)
 */
export const fetchUsuarios = async (cargo?: TbUsuariosCargo) => {
	try {
		const result = await client.graphql({
			query: listTbUsuarios,
			variables: {
				filter: cargo ? { cargo: { eq: cargo } } : undefined,
				limit: 100,
			},
		});

		return result.data.listTbUsuarios.items;
	} catch (error) {
		console.error("Erro ao listar usuários:", error);
		return [];
	}
};

/**
 * Buscar turmas ativas
 */
export const fetchTurmasAtivas = async () => {
	try {
		const result = await client.graphql({
			query: listTbTurmas,
			variables: {
				filter: { turma_ativa: { eq: true } },
			},
		});

		return result.data.listTbTurmas.items;
	} catch (error) {
		console.error("Erro ao buscar turmas:", error);
		return [];
	}
};

/**
 * Buscar aulas de uma turma
 */
export const fetchAulasPorTurma = async (turmaId: string) => {
	try {
		const result = await client.graphql({
			query: listTbAulas,
			variables: {
				filter: { turmaId: { eq: turmaId } },
			},
		});

		return result.data.listTbAulas.items;
	} catch (error) {
		console.error("Erro ao buscar aulas:", error);
		return [];
	}
};

// ========================================
// EXEMPLOS DE USO - Mutations
// ========================================

/**
 * Criar novo usuário
 */
export const criarUsuario = async (input: CreateTbUsuariosInput) => {
	try {
		const result = await client.graphql({
			query: createTbUsuarios,
			variables: {
				input,
			},
		});

		return result.data.createTbUsuarios;
	} catch (error) {
		console.error("Erro ao criar usuário:", error);
		throw error;
	}
};


/**
 * Registrar presença via QR Code
 */
export const registrarPresenca = async (qrcode: string) => {
	try {
		const result = await client.graphql({
			query: registrarPresencaQRCode,
			variables: { qrcode },
		});

		return result.data.registrarPresencaQRCode;
	} catch (error) {
		console.error("Erro ao registrar presença:", error);
		throw error;
	}
};


export { client };
