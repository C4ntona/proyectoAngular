import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AuthComponent } from './auth/auth.component';
import { FormRegistroComponent } from './componentes/form-registro/form-registro.component';
// import { NgbModule } from "@ng-boot";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AuthComponent,
    FormRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModulek

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
