import Prismic from '@prismicio/client';
const apiEndpoint = 'https://richardso.cdn.prismic.io/api/v2';
const Client = Prismic.client(apiEndpoint);

async function getType(typeID) {
	const res = await Client.query(
		Prismic.Predicates.at('document.type', typeID)
		// {orderings: `[my.${typeID}.date desc`}
	);
	return res.results;
}

export { Client, getType };
