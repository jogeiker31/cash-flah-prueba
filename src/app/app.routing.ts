import { Routes } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo:'formulario',
    pathMatch:'full'
  },
  {
    path:'formulario',
    component:FormularioComponent
  },
  {
    path:'**',
    redirectTo:'formulario'
  }
];
