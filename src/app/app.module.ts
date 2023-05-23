import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PropuestasComponent } from './components/propuestas/propuestas.component';
import { ListaComponent } from './components/lista/lista.component';
import { DondevotarComponent } from './components/dondevotar/dondevotar.component';
import { ComunicarComponent } from './components/comunicar/comunicar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PropuestasComponent,
    ListaComponent,
    DondevotarComponent,
    ComunicarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
