import { Routes } from '@angular/router';
import { PublicLayout } from './layouts/public-layout/public-layout/public-layout';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      // Adicione aqui os seus componentes/páginas públicas
      // { path: '', component: HomeComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];