import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { EmpleadoListaComponent } from './empleados/empleado-lista/empleado-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePadreComponent,
    ComponenteHijoComponent,
    EmpleadoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
