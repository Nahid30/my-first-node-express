const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());

app.get('/',(req, res)=>{
    res.send('MAMA, now im understanding Little bit of node i mean Express boom boom');
    
})

app.listen(port, ()=>{
    console.log('Port Ta CMD console e dekhabe', port);
})

app.use(cors());


app.post('/user', (req, res) =>{
    console.log(req.body);
    const user = req.body;
    user.id =users.length + 1;
    users.push(user);
    res.send(user);
})




const users = [
    {id: 1, name: 'Hasan Mahmud', Phone : '01788885555'},
    {id: 2, name: 'Taufiq Rahman', Phone : '01788885555'},
    {id: 3, name: 'Jackov David', Phone : '01788885555'},
    {id: 4, name: 'Cris Charles', Phone : '01788885555'},
    {id: 5, name: 'David Backham', Phone : '01788885555'},
    {id: 6, name: 'Pritom Sarkar', Phone : '01788885555'},
    {id: 7, name: 'Shakib Khan', Phone : '01788885555'},
    {id: 8, name: 'Ananta Jalil', Phone : '01788885555'}
]

app.get('/users', (req, res) =>{
    console.log(req.query)
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(u => u.name.toLowerCase().includes(search))
        res.send(matched); 
    }
    else{
        res.send(users)

    }
})


app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);

})

