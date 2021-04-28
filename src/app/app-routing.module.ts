import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { EhsmLoginComponent } from './ehsm-login/ehsm-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceLoginComponent } from './maintenance-login/maintenance-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { QualityLoginComponent } from './quality-login/quality-login.component';
import { ShopfloorLoginComponent } from './shopfloor-login/shopfloor-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import {SuccessComponent} from './success/success.component'
import { InquirydataComponent } from './inquirydata/inquirydata.component';
import { SaledataComponent } from './saledata/saledata.component';
import { DeliverylistComponent } from './deliverylist/deliverylist.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditComponent } from './credit/credit.component';
import { OverallsalesComponent } from './overallsales/overallsales.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { VenprofileComponent } from './venprofile/venprofile.component';
import { VenprofileupdtComponent } from './venprofileupdt/venprofileupdt.component';
import { VenquotationComponent } from './venquotation/venquotation.component';
import { VenpurchaseComponent } from './venpurchase/venpurchase.component';
import { VengoodsreceiptComponent } from './vengoodsreceipt/vengoodsreceipt.component';
import { VendorinvoiceComponent } from './vendorinvoice/vendorinvoice.component';
import { VendorcreditComponent } from './vendorcredit/vendorcredit.component';
import { VendorpaymentComponent } from './vendorpayment/vendorpayment.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { EmpprofileupdComponent } from './empprofileupd/empprofileupd.component';
import { EmpleavedataComponent } from './empleavedata/empleavedata.component';
import { EmpleaveapplyComponent } from './empleaveapply/empleaveapply.component';
import { EmppayslipComponent } from './emppayslip/emppayslip.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { NotifComponent } from './notif/notif.component';
import { WorkComponent } from './work/work.component';
import { NotifupdialogComponent } from './notifupdialog/notifupdialog.component';
import { NotifcreateComponent } from './notifcreate/notifcreate.component';
import { ShopdashboardComponent } from './shopdashboard/shopdashboard.component';
import { ShopplanComponent } from './shopplan/shopplan.component';
import { ShopprodComponent } from './shopprod/shopprod.component';
import { EhsmincidentComponent } from './ehsmincident/ehsmincident.component';
import { EhsmriskComponent } from './ehsmrisk/ehsmrisk.component';
import { EhsmdboardComponent } from './ehsmdboard/ehsmdboard.component';
import { QualitydboardComponent } from './qualitydboard/qualitydboard.component';
import { QualityincComponent } from './qualityinc/qualityinc.component';
import { QualityresComponent } from './qualityres/qualityres.component';
import { QualityusaComponent } from './qualityusa/qualityusa.component';

const routes: Routes = [
  {path : '' , redirectTo : '/home' , pathMatch : 'full' },
  {path : 'home' , component: HomeComponent},
  {path : 'customerlogin' , component : CustomerLoginComponent},
  {path : 'vendorlogin' , component : VendorLoginComponent},
  {path : 'employeelogin' , component : EmployeeLoginComponent},
  {path : 'maintenancelogin' , component : MaintenanceLoginComponent},
  {path : 'qualitylogin' , component : QualityLoginComponent},
  {path : 'shopfloorlogin' , component : ShopfloorLoginComponent},
  {path : 'ehsmlogin' , component : EhsmLoginComponent},
  {path : 'customerlogin/customerdashboard' , component : CustomerDashboardComponent},
  {path : 'customerlogin/customerdashboard/profile' , component : ProfileComponent},
  {path : 'customerlogin/customerdashboard/profile/update' , component : ProfileupdateComponent},
  {path : 'customerlogin/customerdashboard/profile/update/success' , component : SuccessComponent},
  {path : 'customerlogin/customerdashboard/inquiry' , component : InquirydataComponent},
  {path : 'customerlogin/customerdashboard/salesdata' , component : SaledataComponent},
  {path : 'customerlogin/customerdashboard/delist' , component : DeliverylistComponent },
  {path : 'customerlogin/customerdashboard/invoice',component : InvoiceComponent},
  {path : 'customerlogin/customerdashboard/payment',component : PaymentComponent},
  {path : 'customerlogin/customerdashboard/credit' , component : CreditComponent},
  {path : 'customerlogin/customerdashboard/overallsale' , component : OverallsalesComponent},
  {path : 'vendorlogin/vendordashboard' , component : VendordashboardComponent},
  {path : 'vendorlogin/vendordashboard/vendorprofile' , component : VenprofileComponent},
  {path : 'vendorlogin/vendordashboard/vendorprofileupdt' , component : VenprofileupdtComponent},
  {path : 'vendorlogin/vendordashboard/vendorquot' , component : VenquotationComponent},
  {path : 'vendorlogin/vendordashboard/venpur' , component : VenpurchaseComponent},
  {path : 'vendorlogin/vendordashboard/vengoods' , component : VengoodsreceiptComponent},
  {path : 'vendorlogin/vendordashboard/veninv' , component : VendorinvoiceComponent},
  {path : 'vendorlogin/vendordashboard/vencred' , component : VendorcreditComponent},
  {path : 'vendorlogin/vendordashboard/venpay' , component : VendorpaymentComponent},
  {path : 'employeelogin/empdashboard' , component : EmpdashboardComponent},
  {path : 'employeelogin/empdashboard/empprofile' , component : EmpprofileComponent},
  {path : 'employeelogin/empleave' , component : EmpleavedataComponent},
  {path : 'employeelogin/empdashboard/empleaveapply' , component : EmpleaveapplyComponent},
  {path : 'employeelogin/emppayslip' , component : EmppayslipComponent},
  {path : 'maintenancelogin/maindashboard' , component : MaindashboardComponent},
  {path : 'maintenancelogin/notif' , component : NotifComponent},
  {path : 'maintenancelogin/work' , component : WorkComponent},
  {path : 'shopfloorlogin/dashboard' , component : ShopdashboardComponent},
  {path : 'shopfloorlogin/plan' , component : ShopplanComponent},
  {path : 'shopfloorlogin/prod' , component : ShopprodComponent},
  {path : 'ehsmlogin/dboard' , component : EhsmdboardComponent},
  {path : 'ehsmlogin/incident' , component : EhsmincidentComponent},
  {path : 'ehsmlogin/risk' , component : EhsmriskComponent},
  {path : 'qualitylogin/dboard' , component : QualitydboardComponent},
  {path : 'qualitylogin/inc' , component : QualityincComponent},
  {path : 'qualitylogin/res' , component : QualityresComponent},
  {path : 'qualitylogin/usa' , component : QualityusaComponent},
  {path : "**",component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,CustomerLoginComponent,VendorLoginComponent,
  EmployeeLoginComponent,MaintenanceLoginComponent,QualityLoginComponent,EhsmLoginComponent,
  ShopfloorLoginComponent , CustomerDashboardComponent, PageNotFoundComponent,ProfileComponent,
  ProfileupdateComponent,SuccessComponent,InquirydataComponent,SaledataComponent,DeliverylistComponent,
  InvoiceComponent,PaymentComponent,CreditComponent,OverallsalesComponent,VendordashboardComponent,
VenprofileComponent,VenprofileupdtComponent,VengoodsreceiptComponent,VenquotationComponent,VenpurchaseComponent,
VendorcreditComponent,VendorinvoiceComponent,VendorpaymentComponent,EmpdashboardComponent,EmpprofileComponent,
EmpprofileupdComponent,EmpleaveapplyComponent,EmpleavedataComponent,EmppayslipComponent,MaindashboardComponent,
NotifComponent,WorkComponent,NotifupdialogComponent,NotifcreateComponent,ShopdashboardComponent,ShopplanComponent,
ShopprodComponent,EhsmincidentComponent,EhsmriskComponent,QualityincComponent,QualitydboardComponent,QualityresComponent,
QualityusaComponent]
