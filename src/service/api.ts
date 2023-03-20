import { GraphQLClient } from "graphql-request";

const url = process.env.NEXT_PUBLIC_GRAPHQL_URL as string;

export const api = new GraphQLClient(url);
