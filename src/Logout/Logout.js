import React from "react";
import logo from '../Assets/Wizzit.png'
import {useKeycloak} from "@react-keycloak/web";
import {ExitToApp, History, Search} from "@material-ui/icons";

const Logout = (_) => {
    const {keycloak} = useKeycloak();
    return (
        <div className="left-nav">
            <ul>
                <li>
                    <img src={logo} alt="Wizzit"/>
                </li>
                <li onClick={() => {
                    this.setState({selectedMenu: 'Transaction History'})
                }}>
                    <History/> Transaction history
                </li>
                <li onClick={() => {
                    this.setState({selectedMenu: 'Transaction Search'})
                }}>
                    <Search/> Transaction Search
                </li>
                <li onClick={() => {
                    keycloak.logout().then(e => window.location.href = '/')
                }}>
                    <ExitToApp/> Logout ({localStorage.getItem('names')})
                </li>
            </ul>
        </div>
    );
}
export default Logout;
