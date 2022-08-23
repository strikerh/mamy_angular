// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const wpUrl = 'http://localhost:10034';

export const environment = {
  production: false,

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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
