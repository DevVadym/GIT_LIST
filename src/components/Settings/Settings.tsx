import React from "react"
import { withAuthentication } from "../../helpers/Redirect"

export const Settings: React.FC = () => {
    return (
        <div>Settings</div>
    )
}

export const SettingsContainer = withAuthentication(Settings)