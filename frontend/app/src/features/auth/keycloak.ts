import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "",
    realm: "",
    clientId: ""
})
export const initKeycloak = () => {
    keycloak.init({
        onLoad: "login-required",
        pkceMethod: "S256"
    })
}

keycloak.onTokenExpired = async () => {
    try {
        await keycloak.updateToken(30)
    } catch (err) {
        keycloak.login()
    }
}
export default keycloak;