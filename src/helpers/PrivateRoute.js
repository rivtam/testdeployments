import { useKeycloak } from '@react-keycloak/web';
import WelcomePage from '../Pages/Welcome';
import Sidebar from '../Components/SideBar/Sidebar';

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak();

  // const isLoggedIn = keycloak.authenticated === true;

  // if (isLoggedIn && keycloak.tokenParsed !== undefined) {
  // let names = keycloak.tokenParsed['given_name'] + ' ' + keycloak.tokenParsed['family_name']; ///
  localStorage.setItem('names', 'names');
  localStorage.setItem('token', 'keycloak.token');
  return children;
  // } else {
  //   return <WelcomePage />;
  // }
};

export default PrivateRoute;
