const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const TrackAPI = require("./datasources/track-api");

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			trackAPI: new TrackAPI(),
		};
	},
});
server.listen().then(() => {
	console.log(`
		Server is running! listening on port 4000
		query at localhost:4000
	`);
});
