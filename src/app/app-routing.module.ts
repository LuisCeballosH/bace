import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { InvertirComponent } from './components/invertir/invertir.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'invertir', component: InvertirComponent, data: { role: 'inversor' } },
      { path: 'proyectos', component: ProyectosComponent, data: { role: 'emprendedor' } },
      { path: '', redirectTo: '/proyectos', pathMatch: 'full' },
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
