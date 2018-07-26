import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { quickSearchApp } from 'src/app/quickSearchApp';

@NgModule({
  declarations: [quickSearchApp],
  imports: [BrowserModule,
            HttpClientModule],
  entryComponents: [quickSearchApp]   // reference to our microApp top-level component (or 'shell')
})
export class quickSearchModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    customElements.define('quick-search-app', createCustomElement(quickSearchApp, { injector: this.injector }))
  }
}
