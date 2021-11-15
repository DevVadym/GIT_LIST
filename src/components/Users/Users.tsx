import React from "react"
import { withAuthentication } from "../../helpers/Redirect"

const Users: React.FC = () => {
    return (
        <div>Users</div>
    )
}
export const UsersContainer = withAuthentication(Users)