const wpUrl = 'https://mamydays.com';
export const environment = {
  production: true,

  bashUrl: 'https://app.mamydays.com',
  wpUrl: wpUrl,
  mmyBackend: 'https://api.mamydays.com',

  authConfig: {
    authUrl: `${wpUrl}/oauth/authorize`,
    accessTokenUrl: `${wpUrl}/oauth/token/`,
    client_id: 'wCvj5LAn9JsL1a7Q2lAqJyjB0xZ5bHH2889SJGi9',
    client_secret: 'Gr3KZR3CSBM0QdShzlByzsDxLwmShs4u9GrKDWsF',
    redirect_uri: 'https://app.mamydays.com',
    response_type: 'code',
    grant_type: 'authorization_code'
  }

};
