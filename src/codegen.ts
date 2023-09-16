import { CodegenConfig } from '@graphql-codegen/cli';
const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/lib/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
