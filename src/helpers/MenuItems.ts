import { v1 } from "uuid"
import PersonIcon from "@mui/icons-material/Person"
import GroupIcon from "@mui/icons-material/Group"
import SettingsIcon from "@mui/icons-material/Settings"
import GitHubIcon from "@mui/icons-material/GitHub"
export const components = [
    {
        type: "profile",
        id: v1(),
        Icon: PersonIcon,
        primary: "Profile"
    },
    {
        type: "gitAccounts",
        id: v1(),
        Icon: GitHubIcon,
        primary: "Git Accounts"
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