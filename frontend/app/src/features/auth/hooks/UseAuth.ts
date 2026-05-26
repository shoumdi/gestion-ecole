import { useEffect, useState } from "react"
import keycloak from "../keycloak"

export function useAuth() {
    const [authenticated, setAuthenticated] = useState(keycloak.authenticated ?? false)
    useEffect(() => {
        setAuthenticated(keycloak.authenticated ?? false)
    }, [])
    return {
        authenticated,
        user: keycloak.tokenParsed,
        login: () => keycloak.login(),
        logout: () => keycloak.logout(),
        token: () => keycloak.token
    }
}