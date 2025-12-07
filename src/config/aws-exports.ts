// Configuração do Amplify conectando ao backend RuralCheck

const config = {
	Auth: {
		Cognito: {
			userPoolId: "us-east-2_H8tvB4EQI",
			userPoolClientId: "5ifa9b4ojunr5bdlc3aav29q52",
			identityPoolId: "us-east-2:642e1a9a-5ced-4d9c-a3e0-8daa374199ad",
			loginWith: {
				email: true,
			},
		},
	},
	API: {
		GraphQL: {
			endpoint: "https://bi7fxwljznex5hsgeqywydgh7i.appsync-api.us-east-2.amazonaws.com/graphql",
			region: "us-east-2",
			defaultAuthMode: "iam" as const,
		},
	},
};

export default config;
