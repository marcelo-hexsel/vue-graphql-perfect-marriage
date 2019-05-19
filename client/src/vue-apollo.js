import Vue from "vue";
import VueApollo from "vue-apollo";
import { createApolloClient } from "vue-cli-plugin-apollo/graphql-client";

Vue.use(VueApollo);

const AUTH_TOKEN = "apollo-token";

const httpEndpoint =
  process.env.VUE_APP_GRAPHQL_HTTP || "http://localhost:3000/graphql";

const defaultOptions = {
  httpEndpoint,
  tokenName: AUTH_TOKEN
};

export function createProvider(options = {}) {
  const { apolloClient } = createApolloClient({
    ...defaultOptions,
    ...options
  });

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      }
    },
    errorHandler(error) {
      console.log(
        "%cError",
        "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",
        error.message
      );
    }
  });

  return apolloProvider;
}
