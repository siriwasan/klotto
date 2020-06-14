import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'lotto-buying',
    pathMatch: 'full',
  },
  {
    path: 'lotto-buying',
    loadChildren: () =>
      import('./lotto-buying/lotto-buying.module').then(
        (m) => m.LottoBuyingPageModule
      ),
  },
  {
    path: 'lotto-ticket',
    loadChildren: () =>
      import('./lotto-ticket/lotto-ticket.module').then(
        (m) => m.LottoTicketPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
