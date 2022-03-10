import { Routes } from '@angular/router';

import { startsWith } from '../utils/routes.utils';
import { WrapperComponent } from './../wrapper/wrapper.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { matcher: startsWith('dashboard'), component: WrapperComponent, data: { importName: 'dashboard', elementName: 'dashboard-element' } },
  { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) }
];
