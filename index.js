const express = require('express');
const cors = require('cors');
const app = express();
// const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello  world from my first nodemon')
});

const users = [
    { id: 0, name: 'Fredi', age: 35, email: 'fred@web.web' },
    { id: 1, name: 'Alisha', age: 31, email:'alisha@al.com' },
    { id: 2, name: 'Bela', age: 30, email:'bela@bela.net' },
    { id: 3, name: 'Cathrine', age: 32, email: 'cath@kat.web' },
    { id: 4, name: 'Daizy', age: 33, email: 'daizy@kat.com' },
    { id: 5, name: 'Ema', age: 34, email: 'ema@kat.web' }
    
    
]
    
// app.get('/users', (req, res) => {
//     res.send(users)
// });

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

app.post('/users',(req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hit hit hit', req.body)
    res.json(newUser);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammy')
});
app.get('/rahul/chy', (req, res) => {
    res.send({'ews':123, 'gqwfqgw':'werr', 'hqgwhg':3445})
})

// app.get('/users/:id', (req, res) => {
//     const id = req.params.id;
//     const user = users[id];
//     res.send(user)
    
// })

app.listen(port, () => {
    console.log('listen from port', port);
});