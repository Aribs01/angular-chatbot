// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // brainShopUrl: 'http://api.brainshop.ai/get?bid=[bid]&key=[key]&uid=[uid]&msg=[msg]',
  // brainShopUrl: 'http://api.brainshop.ai/get?bid=172649&key=kle9nV6pmatA0MBP&uid=[uid]&msg=[msg]',
  brainShopUrl: 'https://api.brainshop.ai/get?bid=172649&key=kle9nV6pmatA0MBP&',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
