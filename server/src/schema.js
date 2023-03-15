const { gql } = require("apollo-server");

const typeDefs = gql`
	# Schema definitions go here
	type Query {
		"Get tracks array for homepage grid"
		tracksForHome: [Track!]!
		"Get a single Track info"
		track(id: ID!): Track
		"Get single module info"
		module(id: ID!): Module
	}

	"A track is a group of modules that teaches about a specific topic"
	type Track {
		id: ID!
		title: String!
		author: Author!
		thumbnail: String
		length: Int
		modulesCount: Int
		"The track's complete description, can be in Markdown format"
		description: String
		"The number of times a track has been viewed"
		numberOfViews: Int
		"Track's complete array of modules"
		modules: [Module!]!
	}

	type Author {
		id: ID!
		name: String!
		photo: String
	}

	type Module {
		id: ID!
		"Module's Title"
		title: String!
		"Module's length in minutes"
		length: Int
	}

	type IncrementTrackViewsResponse {
		"Similar to HTTP status code, represents the status of the mutation"
		code: Int!
		"Indicates whether the mutation was successful"
		success: Boolean!
		"Human-readable message for the UI"
		message: String!
		"Newly updated track after a successful mutation"
		track: Track
	}

	type Mutation {
		incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
	}

	type Module {
		id: ID!
		title: String!
		content: String
		videoUrl: String
	}
`;
module.exports = typeDefs;
