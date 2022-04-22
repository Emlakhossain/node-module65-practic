import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are want to delete ?');
        if (proceed) {
            console.log('deleting ', id)
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        console.log('delete')
                        const reamining = users.filter(user => user._id !== id);
                        setUsers(reamining)
                    }
                })
        }
    }
    return (
        <div>
            <h2>Home {users.length}</h2>
            {
                users.map(user => <li
                    key={user._id}
                >

                    {user.name}: {user.email}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDelete(user._id)}>X</button>
                </li>)
            }
        </div >
    );
};

export default Home;