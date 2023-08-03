import Keycloak from 'keycloak-js';

const authServer = new Keycloak({
  realm: 'WIZZIT',
  clientId: 'efinance-services',
  redirectUri: 'https://support-portal-dev.wizzitdigital.com/',
  redirectUriLocal: 'http://localhost:3000',
  url: 'https://auth-server-stage.wizzitdigital.com/',
});
export default authServer;
