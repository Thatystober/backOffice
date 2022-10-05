import { createServer } from "miragejs"

let users = [
  { email: "thaty.appelt@gmail.com", name: "Thaty", password: "123456", confirmPassword: "123456"}
]
createServer({
  routes() {
    this.namespace = 'api';

    this.post("/users", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      users.push(attrs)

      return schema.create('users', attrs)
    })

    this.get("/users", () => {
      return {
        users
      }
    })
  },
})