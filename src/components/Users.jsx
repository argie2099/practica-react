import React, { Component } from 'react'
import UserCard from './Moleculas/UserCard'

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    render(props) {
        const { users } = this.state
        return (
            <div className="ed-grid m-grid-2">
                {
                    users.map( u => (
                         <UserCard key={u.id} name={u.name} mail={u.email} />
                    ))
                }
            </div>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', { method: 'get'})
        .then(res => res.json()).then(res2 => {
            this.setState({
                users: res2
            })
        })
    } 
}

export default Users