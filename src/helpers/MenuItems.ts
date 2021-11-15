import { v1 } from "uuid"
import PersonIcon from "@mui/icons-material/Person"
import MailIcon from "@mui/icons-material/Mail"
import GroupIcon from "@mui/icons-material/Group"
import SettingsIcon from "@mui/icons-material/Settings"

export const components = [
    {
        type: "profile",
        id: v1(),
        Icon: PersonIcon,
        primary: "Profile"
    },
    {
        type: "messages",
        id: v1(),
        Icon: MailIcon,
        primary: "Messages"
    },
    {
        type: "users",
        id: v1(),
        Icon: GroupIcon,
        primary: "Users"
    },
    {
        type: "settings",
        id: v1(),
        Icon: SettingsIcon,
        primary: "Settings"
    }
]