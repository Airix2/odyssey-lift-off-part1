import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, ModuleDetail, QueryResult } from "../components";

export const GET_MODULE_AND_PARENT_TRACK = gql`
	query GetModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
		module(id: $moduleId) {
			id
			title
			length
			content
			videoUrl
		}
		track(id: $trackId) {
			id
			title
			modules {
				id
				title
				length
			}
		}
	}
`;

const Module = ({ moduleId, trackId }) => {
	const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
		variables: { moduleId, trackId },
	});

	return (
		<Layout>
			<QueryResult error={error} loading={loading} data={data}>
				<ModuleDetail track={data?.track} module={data?.module} />
			</QueryResult>
		</Layout>
	);
};

export default Module;
