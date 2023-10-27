import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Query {
    users: [User]
    searchUser(value:String):[User]
    employees: [Employee]
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    username: String
    image: String
  }

  type Employee {
    name: String
    email: String
    bhatt: String
  }
`
export default typeDefs