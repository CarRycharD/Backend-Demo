## Task 1 - The server

Server should be getting its port from environment variable `PORT`, otherwise it should be served on port `3000`

## Task 2 - Request logging

Please include a middleware for logging or set it up if included within the frameworks to log all requests

## Task 3 - CRUD

Following endpoints shall be created (please use the typings as baseline when implementing this functionality, these could be found under `./src/interfaces.ts`):

- list food entries endpoint ( `GET /food` )
- get specific food entry endpoint ( `GET /food/:id` )
- create food entry endpoint ( `POST /food` )
- update food entry endpoint ( `PUT /food/:id` )
- delete food entry endpoint ( `DELETE /food/:id` )

These endpoints should follow the pattern told on the second backend lecture.

On unexpected errors the server should respond with `500` with body:
```json
{
  "error": "internal server error"
}
```
On non-implemented methods / endpoints the server should respond with `404` with body:
```json
{
  "error": "not found"
}
```

## Task 4 - Authentication

Following endpoint shall be created:

- login endpoint ( `POST /login` )

Server should be getting the valid `username` and `password` from `VALID_USERNAME` and `VALID_PASSWORD` environment variables respectively.

accepts `username` and `password` in the body in the following json format:
```json
{
  "username": "thenameoftheuser",
  "password": "password"
}
```
On valid login credentials returns `200` with JWT Token in the body with the following json format:
```json
{
  "token": "thesignedtoken"
}
```
On invalid credentials returns `401`:
```json
{
  "error": "invalid login credential"
}
```

Tips: You can use https://www.npmjs.com/package/jsonwebtoken or https://www.npmjs.com/package/jose to sign tokens

## Task 5 - Authorization
Protect all the endpoints created under [Task 3](#task-3---crud).


Header https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization should contain a valid JWT.
\
Where auth scheme should be `Bearer`.

On invalid, expired or not-provided token server should respond with 401.
\
If the token is valid and verified, the endpoints should work as before.


