import React, { useMemo, useState } from "react"
import { withAuthentication } from "../../helpers/Redirect"
import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

import s from "./GitAccounts.module.css"
import { GitForm } from "./GitForm"
import { AccountCard } from "./AccountCard"

const GitAccounts: React.FC = () => {
    const [open, setOpen] = useState(false)


    const handleClose = () => {
        setOpen(true)
    }

    const form = useMemo(() => {
        if (open) {
            return (
               <GitForm closeForm={()=>setOpen(false)}/>
            )
        }
    }, [open])

    return (
        <div className={s.main_content}>
            <div className={s.add_button}>
                <Button variant={"contained"} onClick={handleClose}>
                    <AddIcon color={"warning"}/>
                    Add Account
                </Button>
            </div>
            {form}
            <div className={s.accounts_cards}>
               <AccountCard/>
            </div>
        </div>
    )
}

export const GitAccountsContainer = withAuthentication(GitAccounts)