import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { quickSearchModule } from './app/quickSearch.module';

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(quickSearchModule);

