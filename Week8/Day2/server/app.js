// server/app.jss
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// middleware to parse JSON bodies
app.use(bodyParser.json());

// route for user-related endpoints
app.use('/api', userRoutes);

// starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


/** 
 * $bcryptPath = "C:\Users\raeny\di-bootcamp\node_modules\bcryptjs"
 * $plaintextPassword = "l0Ve"
   $nodeCommand = "node -e ""const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('$plaintextPassword', 10));"""
   $hashedPassword = Invoke-Expression -Command $nodeCommand
 * $passwordBytes = [System.Text.Encoding]::UTF8.GetBytes($plaintextPassword)
 * $sha256 = [System.Security.Cryptography.SHA256]::Create()
 * $hashedPasswordBytes = $sha256.ComputeHash($passwordBytes)
 * $hashedPasswordHex = [System.BitConverter]::ToString($hashedPasswordBytes) -replace '-'
 * 
 * $jsonData = @{
>>     username = "kim"
>>     email = "kim@dokdo.kr"
>>     password = $hashedPasswordHex
>> } | ConvertTo-Json
 * 
 * $registrationUrl = "http://localhost:3000/api/register"
 * 
 * $response = Invoke-RestMethod -Uri $registrationUrl -Method Post -Body $jsonData -ContentType "application/json"
 * 
 * $response
 * id message
   -- -------
   1 registerUser: user registered successfully

   http://localhost:3000/api/users/1
   {"id":1,"username":"kim","email":"kim@dokdo.kr","hashed_password":"$2a$10$/xBx9/UwIu7Ey/Z/b8ssneGRgaO.Qz2wbBj4Qw5BM5Y6TNx8.kv9W"}
  
   $url = "http://localhost:3000/api/users/1"
   $newUsername = "kim tae"

   $jsonData = @{
    username = $newUsername
   } | ConvertTo-Json

   $response = Invoke-RestMethod -Method Put -Uri $url -Body $jsonData -ContentType "application/json"
   
   $response
   id username email
   -- -------- -----
   1 kim tae  kim@dokdo.kr

   */

