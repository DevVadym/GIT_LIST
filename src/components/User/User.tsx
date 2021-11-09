import React from "react"
import s from "./User.module.css"

export const User: React.FC = () => {



    return (
        <div className={s.user_container}>
            <div className={s.user_info_block}>
                <div>
                    <img
                        className={s.avatar}
                        src={"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8="}/>
                </div>
                <div>
                    <div>hh</div>
                    <div>hh</div>
                    <div>hh</div>
                    <div>hh</div>
                    <div>hh</div>
                    <div>hh</div>
                    <div>hh</div>
                </div>
            </div>
        </div>
    )
}