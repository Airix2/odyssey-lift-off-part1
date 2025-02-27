const mocks = {
	Query: () => ({
		// to get more than 2 entries
		tracksForHome: () => [...new Array(6)],
	}),
	Track: () => ({
		id: () => "track_01",
		title: () => "Astro Kitty Space Explorer",
		author: () => {
			return {
				name: "Grumpy Cat",
				photo: "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
			};
		},
		thumbnail: () =>
			"https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
		length: () => 1210,
		modulesCount: () => 6,
	}),
};

module.exports = {
	mocks,
};
