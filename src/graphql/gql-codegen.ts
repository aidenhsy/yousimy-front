import { CodegenConfig } from '@graphql-codegen/cli';
const config: CodegenConfig = {
  schema: {
    'https://myapi.yousico.com/v1/graphql': {
      headers: {
        'x-hasura-admin-secret': 'jones88888',
      },
    },
  },
  documents: ['src/graphql/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/__generated__/': {
      preset: 'client',
      plugins: [],
    },
  },
};
export default config;