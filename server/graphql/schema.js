import { buildSchema } from 'graphql';

export const graphqlSchema = buildSchema(`

    type textData{
        text:String!
        views:Int!
    }
    type RootQuery{
        hello:textData!
    }

    type user{
        id:ID!,
        name:String!,
        skill:RootQuery!
    }
    type post{
        _id:ID!,
        title:String!,
        content:String!,
        imageUrl:String!,
        creator:User!,
        createdAt:String!,
        createdAt:String!
    }
    type User{
        _id:ID!,
        name:String!,
        email:String!,
        password:String,
        status:String!,
        posts:[post!]!
    }
    input userData{
        email:String!,
        name:String!,
        password:String!
    }
    type rootMutation{
        createUser($input:userData):User!
    }
    type AuthData{
        token:String!,
        userId:String!
    }
    input loginInput{
        email:String!,
        password:String!
    }
    schema:{
        // query:RootQuery,
        login($input:loginInput):AuthData!
        mutation:rootMutation
    }
`);
