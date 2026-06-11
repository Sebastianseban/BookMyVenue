# BookMyVenue Postman

Import these files into Postman:

- `BookMyVenue Backend API.postman_collection.json`
- `BookMyVenue Backend.postman_environment.json`

Recommended setup:

- Set `baseUrl` to your local or production API URL.
- Set `nodeEnv` to `production` when testing deployed cookies.
- Run `Auth > Register` or `Auth > Login` first, then `Refresh` and `Logout`.

Notes:

- `refreshToken` is stored in the environment from the `Set-Cookie` header.
- The collection asserts that auth responses do not expose `passwordHash`.
