import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { CardComponent } from './component/card/card.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LandingBannerComponent } from './component/landing-banner/landing-banner.component';
import { AssteManagementComponent } from './component/asste-management/asste-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WorkOrderComponent } from './component/work-order/work-order.component';
import { MatTabsModule } from '@angular/material/tabs';
import {CdkTableModule} from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatepickerComponent } from './materials/datepicker/datepicker.component';
// import the TabModule for the Tab component
import { TabModule } from '@syncfusion/ej2-angular-navigations';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    CardComponent,
    DashboardComponent,
    LandingBannerComponent,
    AssteManagementComponent,
    WorkOrderComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    CdkTableModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    TabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
