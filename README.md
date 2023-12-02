# week-3.1

This is a simple Express server with login functionality. It includes basic usage of Express, body-parser, and CORS middleware.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installing

Clone the repository and install the dependencies:

git clone https://github.com/your-username/week-3.git
cd week-3
npm install
```
>Running the Server
Start the Express server:

bash
npm start
The server will be running on http://localhost:3000.

>API Endpoints

1. Home
Endpoint: /
Method: GET
Description: Get a simple "Hello World!" message.
2. Login
Endpoint: /login

Method: POST

Description: Simulates a login functionality. Checks if the provided username and password match the predefined values.
->Request:
json
{
  "username": "user",
  "password": "123123"
}
->Response:
-Success:
json
{
  "status": "success"
}
->Errors:
Username not found:
json
{
  "status": "error, username not found"
}
->Wrong password:
json
{
  "status": "error, wrong password"
}
>Dependencies
Express: Fast, unopinionated, minimalist web framework for Node.js.
body-parser: Node.js body parsing middleware.
cors: Node.js CORS middleware.
License
This project is licensed under the ISC License - see the LICENSE file for details.

perl
Anda harus mengganti link repository dan informasi lainnya sesuai dengan proyek Anda. Juga, pastikan untuk menambahkan file `LICENSE` jika Anda ingin menyertakan informasi lisensi proyek.
# webhook.1
# webhook.1
