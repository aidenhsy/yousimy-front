import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  concat,
  InMemoryCache,
} from '@apollo/client';
import { getCookie } from 'cookies-next';

export const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}/graphql`,
});

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = getCookie('access_token');
  const headersFromContext = operation.getContext().headers || {}; // Get headers from the context
  if (accessToken) {
    operation.setContext({
      headers: {
        ...headersFromContext,
        Authorization: `Bearer ${accessToken}`,
        // 'x-hasura-role': 'store',
      },
    });
  } else {
    operation.setContext({
      headers: {
        ...headersFromContext,
      },
    });
  }
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
});
