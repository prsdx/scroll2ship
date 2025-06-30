require('dotenv').config();
const PORT = process.env.PORT || 3000;
const database = require('./config/database.js');
const userCollection = require('./models/user.js');

const express = require('express');
const app = express();

app.use(express.json());

async function main() {
    const user_1 = new userCollection({
        name: 'Heymun',
        email: 'h@example.com',
        password: '123'
    });
    try {
        const result = await user_1.save();
        console.log('User 1 Saved Successfully', result);
    } catch (err) {
        console.log('Error Saving User 1', err.message);
    }
}

main();

app.listen(PORT, ()=>{
    console.log(`Server started at PORT: ${PORT}`);
});