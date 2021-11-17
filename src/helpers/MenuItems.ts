import { v1 } from "uuid"
import PersonIcon from "@mui/icons-material/Person"
import GroupIcon from "@mui/icons-material/Group"
import SettingsIcon from "@mui/icons-material/Settings"
import GitHubIcon from "@mui/icons-material/GitHub"
import { UpWorkIcon } from "../SVG/UpWork"

export const components = [
    {
        type: "upWork",
        id: v1(),
        Icon: UpWorkIcon,
        primary: "Up Work"
    },
    {
        type: "profile",
        id: v1(),
        Icon: PersonIcon,
        primary: "Profile"
    },
    {
        type: "gitLinks",
        id: v1(),
        Icon: GitHubIcon,
        primary: "Git Links"
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