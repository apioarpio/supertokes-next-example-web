import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import * as reactRouterDom from "react-router-dom";

import ThirdPartyEmailPassword, {
    Github,
    Google,
    Facebook,
    Apple
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import {BrowserRouter, Routes} from "react-router-dom";



SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "sample",
        apiDomain: "http://localhost:3000",
        websiteDomain: "http://localhost:5173",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [
                    Github.init(),
                    Google.init(),
                    Facebook.init(),
                    Apple.init(),
                ]
            }
        }),
        Session.init()
    ]
});


function App() {
    const [count, setCount] = useState(0)

    return (
        <SuperTokensWrapper>
            <BrowserRouter>
                <Routes>
                    {/*This renders the login UI on the /auth route*/}
                    {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
                    {/*Your app routes*/}
                </Routes>
            </BrowserRouter>
        </SuperTokensWrapper>
    );
}

export default App
