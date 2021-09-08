import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Button} from '@material-ui/core';

const EditUser = () =>{
    const {id} = useParams();

    const [user, setUser] = useState({
        name: "",
        position: "",
        office: "",
        age: "",
        salary: "",
        
    });

//onChange of text fields

    const onInputChange = (e) =>{
        setUser({...user, [e.target.name] : e.target.value})
    }

    const history = useHistory();

    
    useEffect(()=>{
        loadUser()
    },[])
   
   
    const numberFormat = (value) =>
    new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
    }).format(value);

    const {name, position, office, age, salary } = user;

    const onSubmit = async (e) =>{
        e.preventDefault();
        await fetch(`https://609e2a6033eed80017957ded.mockapi.io/users/${id}`,
        {
        crossDomain:true,
        method:"PUT",
        mode: 'cors',
        headers:{
            'Content-type':'application/json'},
        body: JSON.stringify(user)
        });
        history.push("/users");
    }


    const loadUser = async() =>{
        const request = await fetch(`https://609e2a6033eed80017957ded.mockapi.io/users/${id}`,{method:"GET"})
        const res = await request.json();
        console.log(res);
        setUser(res);
    } 



    return(
        <div>
            <Button variant="contained" color="primary"
            onClick={()=>{
                history.goBack();
            }}>
                Go Back
            </Button>
            <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="name"
                value={name}
                onChange={(e)=>{
                    onInputChange(e)
                }}></input>
            </div>

            <div className="form-group">
                <label for="exampleInputPassword1">Position</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="position" name="position"
                value={position}
                onChange={(event)=>{
                    onInputChange(event)
                }}></input>
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Office</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="office" name="office"
                value={office}
                onChange={(event)=>{
                    onInputChange(event);
                }}></input>   
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Age</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter age" name="age"
                value={age}
                onChange={(event)=>{
                    onInputChange(event);
                }}></input>            
            </div>


            <div className="form-group">
                <label for="exampleInputEmail1">Salary</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter salary" name="salary"
                value={salary}
                onChange={(event)=>{
                    onInputChange(event);
                }}></input>
            </div>
 
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary"
            onClick={(event)=>{
                onSubmit(event);
                console.log(user);
            }}>Submit</button>
            </form>
        </div>
    )
}
export default EditUser;