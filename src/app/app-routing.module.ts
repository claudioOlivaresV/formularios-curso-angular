import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: ()=> import('./template/template.module').then(modulo => modulo.TemplateModule)
  },
  {
    path: 'reactive',
    loadChildren: ()=> import('./reactive/reactive.module').then(modulo => modulo.ReactiveModule)
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(modulo => modulo.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
