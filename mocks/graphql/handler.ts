import { AddUserDocument, UsersDocument } from '@/graphql/generated/schema'
import { graphql, http, HttpResponse } from 'msw'

export const userHandlers = [
  graphql.query(UsersDocument, () => {
    return HttpResponse.json({
      "data": {
        "users": [
          {
            "id": "1",
            "name": "hoge",
            "age": 20,
            "createdAt": "2024-07-19T02:17:19Z",
            "updatedAt": "2024-07-19T02:17:19Z"
          },
          {
            "id": "2",
            "name": "foo",
            "age": 30,
            "createdAt": "2024-07-20T03:47:45Z",
            "updatedAt": "2024-07-20T03:47:45Z"
          }
        ]
      }
    })
  }),
  graphql.mutation(AddUserDocument, () => {
    return HttpResponse.json({
      "data": {
        "addUser": {
          "user": {
            "id": "3",
            "name": "fuga",
            "age": 40,
            "createdAt": "2024-07-21T04:47:45Z",
            "updatedAt": "2024-07-21T04:47:45Z"
          }
        }
      }
    })
  })
]