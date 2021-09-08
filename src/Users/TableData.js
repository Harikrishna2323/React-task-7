import React, {useState, useEffect} from 'react';
import Topbar from '../components/Topbar';
import {BrowserRouter as Router, Link, Switch, Route, useParams, useHistory} from 'react-router-dom';
import LoadUser from './LoadUser';
import AddUser from './AddUser';
import EditUser from './EditUser';

export const UserContext = React.createContext();

const TableData = () =>{
    const [users, setUsers] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        async function fetchData(){
            const request = await fetch("https://609e2a6033eed80017957ded.mockapi.io/users",{method:"GET"})
            const res = await request.json();
            const data = await setUsers(res);
        }
        fetchData();
         },[]);


    return(
        <UserContext.Provider value={users}>
            <Router>
                <Topbar />
                
                <Switch>
                    <Route exact path="/users">
                        <LoadUser />
                    </Route>

                    <Route exact path="/users/add">
                        <AddUser />
                    </Route> 

                    <Route exact path="/users/edit/:id">
                        <EditUser />
                    </Route>
                 </Switch>
        
            </Router>
        </UserContext.Provider>
    )
}
export default TableData;

