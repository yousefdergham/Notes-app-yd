const config = {
	SENTRY_DSN: "https://3f19678d4a054991bc85c37af3a30ddc@o1131106.ingest.sentry.io/6175313",
	MAX_ATTACHMENT_SIZE: 5000000,
	STRIPE_KEY: "pk_test_51KNkARLxhvT8VMTGZyeB2lnnTGr2JDtMcU9ilZZRnSTHK8XCHwPiKM2LMupPzsNclCxiPFsZbyOrhgpzI0Zg0RZa004VuLem5M",

	// Backend config
	s3: {
		REGION: process.env.REACT_APP_REGION,
		BUCKET: process.env.REACT_APP_BUCKET,
	},
	apiGateway: {
		REGION: process.env.REACT_APP_REGION,
		URL: process.env.REACT_APP_API_URL,
	},
	cognito: {
		REGION: process.env.REACT_APP_REGION,
		USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
		APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
		IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
	},
};

export default config;