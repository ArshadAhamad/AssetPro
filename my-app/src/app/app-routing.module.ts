import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssteManagementComponent } from './component/asste-management/asste-management.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LandingBannerComponent } from './component/landing-banner/landing-banner.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { WorkOrderComponent } from './component/work-order/work-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
  {path: 'home', component: LandingPageComponent},
  {path: 'landingPage', component: LandingBannerComponent},
  {path: 'asset', component: AssteManagementComponent},
  {path: 'workOrder', component: WorkOrderComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
