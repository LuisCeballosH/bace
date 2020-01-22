import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { ScrollTopButtonComponent } from './components/scroll-top-button/scroll-top-button.component';
import { LogoutModalComponent } from './components/logout-modal/logout-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CrearProyectosComponent } from './components/crear-proyectos/crear-proyectos.component';
import { ListarProyectosComponent } from './components/listar-proyectos/listar-proyectos.component';
import { InvertirComponent } from './components/invertir/invertir.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWrapperComponent,
    ScrollTopButtonComponent,
    LogoutModalComponent,
    FooterComponent,
    TopbarComponent,
    LoginComponent,
    ProyectosComponent,
    CrearProyectosComponent,
    ListarProyectosComponent,
    InvertirComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
