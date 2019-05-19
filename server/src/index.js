var express = require("express")
var app = express()
var { ApolloServer } = require("apollo-server-express")
var schema = require("./graphql/schema")
var indexRoute = require("./routes/indexRoute")
var restRoute = require("./routes/restRoute")

//enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/", indexRoute)
app.get("/user", restRoute)

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true
})

server.applyMiddleware({
  app
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Vue graphql marriage server running on ${PORT}`)
})
