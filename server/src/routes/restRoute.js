var users = require("../users.json")

module.exports = (req, res) => {
  let nameSearch = req.query.name
  res.send(
    users.filter(f => {
      if (!nameSearch) return true

      return f.name.includes(nameSearch)
    })
  )
}
