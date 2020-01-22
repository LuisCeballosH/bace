import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { InvertirComponent } from './components/invertir/invertir.component';


const routes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    children: [
      { path: 'invertir', component: InvertirComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: '', redirectTo: '/proyectos', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
