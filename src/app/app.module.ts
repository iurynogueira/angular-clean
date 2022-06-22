import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainModule } from './domain/domain.module';
import { InfraModule } from './infra/infra.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, InfraModule, DomainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
