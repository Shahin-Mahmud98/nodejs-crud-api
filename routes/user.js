import express from 'express';
const router = express.Router(); //for post method
import {v4 as uuidv4} from 'uuid'; //for post method
// import userRoutes from './user'

//Mock database
const users = [
    {
        first_name:'John',
        last_name:'Doe',
        email:'johndoe@gmail.com',
    },
    {
        first_name:'Alice',
        last_name:'Smith',
        email:'alicesmith@gmail.com',
    }
];



//for post
// const users = [];

router.post('/',(req,res)=>{
    const user = req.body;
    const newUser = { ...user, id: uuidv4() };
    users.push(newUser);
    res.send(`${newUser.last_name} has been added to the database`);
})
//for post end

//getting the list users from the mock database


//How to Create the GET /users/:id Endpoint
//id dhore dhore khuje dibe get method theke
router.get('/:id',(req,res)=>{
    const {id} = req.params;

    const foundUser = users.find((user)=>user.id===id)
    res.send(foundUser)
});

//delete method
router.delete('/:id',(req,res)=>{
    const {id} = req.params;

   users = users.filter((user)=>user.id !==id)
    res.send(`${id} deleted successfully from database`);
});


//updated
router.patch('/:id',(req,res)=>{
    const {id} = req.params;

    const {first_name,last_name,email} = req.body;

   const user = users.find((user)=>user.id ===id)

   if(first_name) user.first_name = first_name;
   if(last_name) user.last_name = last_name;
   if(email) user.email = email;


    res.send(`User with the ${id} has been updated`);
});



router.get('/',(req,res)=>{
    res.send(users);
});

router.get('/profile',(req,res)=>{
    res.send('profile page');
});



export default router;
















