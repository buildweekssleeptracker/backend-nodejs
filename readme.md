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