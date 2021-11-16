import React from "react"
import ReactDOM from "react-dom"
import "./common/index.css"
import { AppContainer } from "./components/AppContainer"
import reportWebVitals from "./reportWebVitals"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { CookiesProvider } from "react-cookie"

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <CookiesProvider>
                <AppContainer/>
            </CookiesProvider>
        </Provider>
    </HashRouter>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
