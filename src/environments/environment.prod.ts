const wpUrl = 'http://localhost:10034';
export const environment = {
  production: true,

  bashUrl: 'http://localhost:4300',
  wpUrl: wpUrl,
  mmyBackend: 'http://localhost:3000',

  authConfig: {
    authUrl: `${wpUrl}/oauth/authorize`,
    accessTokenUrl: `${wpUrl}/oauth/token/`,
    client_id: 'wCvj5LAn9JsL1a7Q2lAqJyjB0xZ5bHH2889SJGi9',
    client_secret: 'Gr3KZR3CSBM0QdShzlByzsDxLwmShs4u9GrKDWsF',
    redirect_uri: 'http://localhost:4300',
    response_type: 'code',
    grant_type: 'authorization_code'
  }

};
