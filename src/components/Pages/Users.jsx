import React, { Component } from 'react'
import UsersGrid from '../Organismos/UsersGrid'

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usersArr: []
        }
    }

    render() {
        const { usersArr } = this.state

        return(
            <UsersGrid users={usersArr} />
        )

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', { method: 'get'})
        .then(res => res.json()).then(res2 => {
            this.setState({
                usersArr: res2
            })
        })
    } 
}

export default Users