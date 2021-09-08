import React,  {useState, useEffect, useContext} from 'react';
import {BrowserRouter as Router, Link, Switch, Route, useParams, useHistory} from 'react-router-dom';
import {Button } from '@material-ui/core';
import {Delete} from '@material-ui/icons'
import { UserContext } from './TableData';

const LoadUser =  () =>{

    const [users, setUsers] = useState(useContext(UserContext));
    const {id} = useParams();

    useEffect(()=>{
        async function fetchData(){
            const request = await fetch("https://609e2a6033eed80017957ded.mockapi.io/users",{method:"GET"})
            const res = await request.json();
            console.log(res);
            const data = await setUsers(res);    
        }
        fetchData();
         },[]);

         const deleteUser = async(id)=>{
            const request = await fetch(`https://609e2a6033eed80017957ded.mockapi.io/users/${id}`,{method:"DELETE"});
            const req = await fetch("https://609e2a6033eed80017957ded.mockapi.io/users",{method:"GET"})
            const res = await req.json();
            console.log(res);
            const data = await setUsers(res); 
         }
    


     return(
             <div className="context" >
             <div className="card-body">
             
             <div className="table-responsive">
             <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                         <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                             For more information about DataTables, please visit the <a target="_blank"
                                 href="https://datatables.net">official DataTables documentation</a>.</p>
                                 <Link to="/users/add">
                                    <Button variant="contained" color="primary"
                                    >
                                        Add User</Button>
                                    </Link>
                                 
                 <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                     
                 
                         <thead>
                         <tr>
                             <th>Name</th>
                             <th>Position</th>
                             <th>Office</th>
                             <th>Age</th>
                         
                             <th>Salary (in $)</th>
                             <th>Action</th>
                         </tr>
                     </thead>
                     
                     <tbody>
                     {users.map((item,idx) => {
                         return(
                         <>
                             <tr>
                             <td>{item.name}</td>
                             <td>{item.position}</td>
                             <td>{item.office}</td>
                             <td>{item.age}</td>
                             <td>{item.salary}</td>
                             <td>
                                <Link to ={`/users/edit/${item.id}`} >
                                    <Button variant="contained" color="primary">
                                        Edit
                                    </Button>
                                </Link>
                                <Button onClick={()=>deleteUser(item.id)}>DEL</Button>
                                 
                             </td>
                         </tr>
                         </>

                         )
                     })}
                     </tbody>
                 </table>
             </div>
             </div>
         </div>

         )
     }
     export default LoadUser;