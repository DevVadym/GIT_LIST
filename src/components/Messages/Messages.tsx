import React from "react"
import { withAuthentication } from "../../helpers/Redirect"

const Messages: React.FC = () => {
    return (
        <div>Messages</div>
    )
}

export const MessagesContainer = withAuthentication(Messages)