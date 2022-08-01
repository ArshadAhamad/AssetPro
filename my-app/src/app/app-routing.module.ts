import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManagementComponent } from './component/account-management/account-management.component';
import { AssteManagementComponent } from './component/asste-management/asste-management.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LandingBannerComponent } from './component/landing-banner/landing-banner.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { SchedulingAndAlertComponent } from './component/scheduling-and-alert/scheduling-and-alert.component';
import { UserManagementComponent } from './component/user-management/user-management.component';
import { WorkOrderComponent } from './component/work-order/work-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
  {path: 'home', component: LandingPageComponent},
  {path: 'landingPage', component: LandingBannerComponent},
  {path: 'asset', component: AssteManagementComponent},
  {path: 'workOrder', component: WorkOrderComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user', component: UserManagementComponent},
  {path: 'alert', component: SchedulingAndAlertComponent},
  {path: 'account', component: AccountManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
