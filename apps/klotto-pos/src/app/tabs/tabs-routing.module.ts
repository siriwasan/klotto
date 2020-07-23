import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'tab1',
      //   loadChildren: () =>
      //     import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      // },
      {
        path: 'order',
        loadChildren: () =>
          import('../order/order.module').then((m) => m.OrderPageModule),
      },
      {
        path: 'bought',
        loadChildren: () =>
          import('../bought/bought.module').then((m) => m.BoughtPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/order',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/order',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
