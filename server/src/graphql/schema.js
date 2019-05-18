var { makeExecutableSchema } = require("apollo-server-express")
var { merge } = require("lodash")

let definitions = []
definitions.push(require("./definition/userDefinitions"))

const Query = `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

module.exports = makeExecutableSchema({
  typeDefs: [Query, ...definitions.map(d => d.typeDefs)],
  resolvers: merge(...definitions.map(d => d.resolvers))
})
