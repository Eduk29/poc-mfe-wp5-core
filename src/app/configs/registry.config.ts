import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export const registry = {
  dashboard: () => import('dashboard/web-components'),
};
