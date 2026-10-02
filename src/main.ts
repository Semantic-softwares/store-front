import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { loadStorefrontLanguage } from './app/i18n/bootstrap-language';

loadStorefrontLanguage().finally(() => {
  bootstrapApplication(App, appConfig)
    .catch((err) => console.error(err));
});
