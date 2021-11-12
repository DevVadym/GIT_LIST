import React, { useEffect } from "react"
import s from "./User.module.css"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { UserType } from "../../API/userApi"
import { userThunk } from "./UserSlice/userThunk"

export const User: React.FC = () => {
    const user = useSelector<RootState, UserType | null>(state => state.user.user)
    console.log(user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userThunk())
    }, [])

    return (
        <div className={s.user_container}>
            <div className={s.user_block}>
                <div className={s.user_avatar_block}>
                    <img
                        className={s.avatar}
                        src={"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8="}/>
                </div>
                <div className={s.user_info_block}>
                    <div>
                        <span>Name: </span>
                        <span>{user?.name}</span>
                    </div>
                    <div>
                        <span>Last name: </span>
                        <span>{user?.last_name}</span>
                    </div>
                    <div>
                        <span>Tel: </span>
                        <span>{user?.tel}</span>
                    </div>
                    <div>
                        <span>Email: </span>
                        <span>{user?.email}</span>
                    </div>

                    <div className={s.user_about_block}>
                        <div>
                            <span>
                                something about user
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}