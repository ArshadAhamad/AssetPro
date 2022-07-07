import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { CardComponent } from './component/card/card.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LandingBannerComponent } from './component/landing-banner/landing-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    CardComponent,
    DashboardComponent,
    LandingBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
