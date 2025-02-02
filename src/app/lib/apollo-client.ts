import { ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client"
// 何も設定しないとキャッシュを常に使用してしまう。
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
  },
  query: {
    fetchPolicy: "no-cache",
  },
  mutate: {
    fetchPolicy: "no-cache",
  },
}

const client = new ApolloClient({
  uri: process.env.BASE_ENDPOINT_GRAPHQL,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
})

export default client
