import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MenuComponent } from 'projects/sidenav/src/app/sidebar/menu/menu.component';
import { SidebarModule } from 'projects/sidenav/src/app/sidebar/sidebar.module';
import { routes } from './app-routing.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutModule } from './main-layout/main-layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainLayoutModule,
    SidebarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
