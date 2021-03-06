var { gql } = require("apollo-server-express")
var users = require("../../users.json")

const typeDefs = gql`
  extend type Query {
    """
    Users list
    """
    users(name: String): [User]
    """
    User
    """
    user(id: Float!): User
  }

  type User {
    """
    User id
    """
    id: Float
    """
    User name
    """
    name: String
    age: Int
    responsible: User
  }
`

const resolvers = {
  Query: {
    user: (obj, args, context, info) => {
      return Promise.resolve(users.find(f => f.id === args.id))
    },
    users: (obj, args, context, info) => {
      let nameSearch = args.name

      return Promise.resolve(
        users.filter(f => {
          if (!nameSearch) return true

          return f.name.includes(nameSearch)
        })
      )
    }
  },
  User: {
    responsible: obj => {
      if (obj.responsible)
        return Promise.resolve(users.find(f => f.id === obj.responsible))
      return null
    }
  }
}

module.exports = { typeDefs, resolvers }
