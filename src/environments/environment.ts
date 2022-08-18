// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  bashUrl: 'http://localhost:4200',
  wpUrl: 'http://profile.mamydays.lcl',

  authConfig: {
    authUrl: 'http://profile.mamydays.lcl/oauth/authorize',
    accessTokenUrl: 'http://profile.mamydays.lcl/oauth/token/',
    client_id: 'fwB3MSTlVyyU9tfXUMTCy6AMvULIVzcwelMSQ1gO',
    client_secret: 'r4oX7ng95kFoZD5FCQkkZlEkO90wykPs35OxjJkq',
    redirect_uri: 'http://localhost:4200',
    response_type: 'code',
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
