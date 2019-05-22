How to run the server localy:
    run `yarn install`
    go to `http://localhost:5000/` and make sure it says `it's alive`

End points:
    1. Register: 
        url: `/api/register/`
        header: `Content-Type: application/json`
        body: {
                "username": "dbvu99",
                "password": "hello123",
                "firstName": "Duc",
                "lastName": "Vu"
            }
    2. Login:
        url: `/api/login/`,
        header: `Content-Type: application/json`
        body: '{
                "username": "dbvu99",
                "password": "hello123",
            }

    if succeeded, should return something like this:
    {
        "message": "Welcome dbvu999!",
        "username": "dbvu999",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRidnU5OTkiLCJyb2xlcyI6WyJzdHVkZW50Il0sImlhdCI6MTU1ODQ1MTUyNiwiZXhwIjoxNTU4NDU1MTI2fQ.WkZYLveSpwNXN3AoJ2a2I20tJG9ABq8GjEgRJY7_0Y0"
    }
    otherwise will return a specific err message