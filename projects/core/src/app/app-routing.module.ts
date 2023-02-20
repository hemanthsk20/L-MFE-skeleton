import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './main-layout/header/header.component';
import { HomeComponent } from './main-layout/home/home.component';
import { SidenavComponent } from './main-layout/sidenav/sidenav.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
    pathMatch: 'full'
  },
  {
    path: 'side-menu',
    loadChildren: () => import('sidenav/Module').then(m => m.SidebarModule)
  },
  // {
  //   path: 'd-table',
  //   loadChildren: () => import('dashboard/Module').then(m => m.SampleModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
