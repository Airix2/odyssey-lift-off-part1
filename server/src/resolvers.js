// Resolver function names must match the field name in the schema
// The Query and Mutation types in the schema should have corresponding keys in the resolver object

const resolvers = {
	Query: {
		// returns an array of Tracks that will be used to populate
		// the homepage grid of our web client
		tracksForHome: (_, __, { dataSources }) => {
			return dataSources.trackAPI.getTracksForHome();
		},
		// get a single track by ID, for the track page
		// the name id is from the schema property, so it has to be named that.
		track: (_, { id }, { dataSources }) => {
			return dataSources.trackAPI.getTrack(id);
		},
		module: (_, { id }, { dataSources }) => {
			return dataSources.trackAPI.getModule(id);
		},
	},
	Mutation: {
		// Increments a track's numberOfViews property
		incrementTrackViews: async (_, { id }, { dataSources }) => {
			try {
				const track = await dataSources.trackAPI.incrementTrackViews(
					id
				);
				return {
					code: 200,
					success: true,
					message: `Successfully incremented number of views for track ${id}`,
					track,
				};
			} catch (error) {
				return {
					code: error.extensions.response.status,
					success: false,
					message: error.extensions.response.body,
					track: null,
				};
			}
		},
	},
	Track: {
		author: ({ authorId }, _, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId);
		},
		modules: ({ id }, _, { dataSources }) => {
			return dataSources.trackAPI.getTrackModules(id);
		},
	},
};

module.exports = resolvers;
