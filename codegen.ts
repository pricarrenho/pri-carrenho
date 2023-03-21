import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api-sa-east-1.hygraph.com/v2/clfgw3yvb0ark01t8fj0u31rg/master",
  documents: "src/service/**/queries.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
