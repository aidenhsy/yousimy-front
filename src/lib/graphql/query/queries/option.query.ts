import { graphql } from '@/gql';

export const optionQuery = graphql(/* GraphQL */ `
  query SelectOptions($input: FieldInput!) {
    selectOptions: options(input: $input) {
      field
      options {
        id
        value
      }
    }
  }
`);
