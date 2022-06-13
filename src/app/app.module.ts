import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataModule } from "./data/data.module";
import { InfraModule } from "./infra/infra.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DataModule, InfraModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
