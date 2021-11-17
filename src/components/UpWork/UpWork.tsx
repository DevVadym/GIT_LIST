import React from "react"
import { withAuthentication } from "../../helpers/Redirect"

const UpWork: React.FC = () => {
    return (
        <div>
            UpWork
        </div>
    )
}

export const UpWorkContainer = withAuthentication(UpWork)