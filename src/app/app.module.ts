import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatSliderModule } from '@angular/material/slider';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { MaintenanceLoginComponent } from './maintenance-login/maintenance-login.component';
import { ShopfloorLoginComponent } from './shopfloor-login/shopfloor-login.component';
import { EhsmLoginComponent } from './ehsm-login/ehsm-login.component';
import { QualityLoginComponent } from './quality-login/quality-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { SuccessComponent } from './success/success.component';
import { InquirydataComponent } from './inquirydata/inquirydata.component';
import { SaledataComponent } from './saledata/saledata.component';
import { DeliverylistComponent } from './deliverylist/deliverylist.component';
import { PaymentComponent } from './payment/payment.component'; 
import { InvoiceComponent } from './invoice/invoice.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { NotifComponent } from './notif/notif.component';
import { WorkComponent } from './work/work.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NotifupdialogComponent } from './notifupdialog/notifupdialog.component';
import { NotifcreateComponent } from './notifcreate/notifcreate.component';
import { WorkupdComponent } from './workupd/workupd.component';
import { WorkcreateComponent } from './workcreate/workcreate.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ShopdashboardComponent } from './shopdashboard/shopdashboard.component';
import { ShopplanComponent } from './shopplan/shopplan.component';
import { ShopprodComponent } from './shopprod/shopprod.component';
import { ShopplanecComponent } from './shopplanec/shopplanec.component';
import { ShopprodecComponent } from './shopprodec/shopprodec.component';
import { EhsmriskComponent } from './ehsmrisk/ehsmrisk.component';
import { EhsmincidentComponent } from './ehsmincident/ehsmincident.component';
import { EhsmdboardComponent } from './ehsmdboard/ehsmdboard.component';

import { EhsmeditComponent } from './ehsmedit/ehsmedit.component';
import { QualitydboardComponent } from './qualitydboard/qualitydboard.component';
import { QualityincComponent } from './qualityinc/qualityinc.component';
import { QualityusaComponent } from './qualityusa/qualityusa.component';
import { QualityresComponent } from './qualityres/qualityres.component';
import { QualitycreComponent } from './qualitycre/qualitycre.component';
import { ExtComponent } from './ext/ext.component';
import { ExtraComponent } from './extra/extra.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerLoginComponent,
    VendorLoginComponent,
    EmployeeLoginComponent,
    MaintenanceLoginComponent,
    ShopfloorLoginComponent,
    EhsmLoginComponent,
    QualityLoginComponent,
    PageNotFoundComponent,
    routingComponents,
    CustomerDashboardComponent,
    ProfileComponent,
    ProfileupdateComponent,
    SuccessComponent,
    InquirydataComponent,
    SaledataComponent,
    DeliverylistComponent,
    PaymentComponent,
    InvoiceComponent,
    CreditComponent,
    OverallsalesComponent,
    VendordashboardComponent,
    VenprofileComponent,
    VenprofileupdtComponent,
    VenquotationComponent,
    VenpurchaseComponent,
    VengoodsreceiptComponent,
    VendorinvoiceComponent,
    VendorcreditComponent,
    VendorpaymentComponent,
    EmpdashboardComponent,
    EmpprofileComponent,
    EmpprofileupdComponent,
    EmpleavedataComponent,
    EmpleaveapplyComponent,
    EmppayslipComponent,
    MaindashboardComponent,
    NotifComponent,
    WorkComponent,
    NotifcreateComponent,
    WorkupdComponent,
    WorkcreateComponent,
    ShopdashboardComponent,
    ShopplanComponent,
    ShopprodComponent,
    ShopplanecComponent,
    ShopprodecComponent,
    EhsmriskComponent,
    EhsmincidentComponent,
    EhsmdboardComponent,
   
    EhsmeditComponent,
   
    QualitydboardComponent,
   
    QualityincComponent,
   
    QualityusaComponent,
   
    QualityresComponent,
   
    QualitycreComponent,
   
    ExtComponent,
   
    ExtraComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
     MatSliderModule,MatRadioModule,MatToolbarModule,MatIconModule,MatMenuModule,MatSidenavModule,
     MatCardModule,MatListModule,MatTableModule,MatDialogModule,MatFormFieldModule,MatSnackBarModule,
     MatPaginatorModule
  ],
  entryComponents: [
    NotifupdialogComponent,
    NotifcreateComponent,
    WorkupdComponent,
    WorkcreateComponent,
    ShopplanecComponent,
    ShopprodecComponent,
    EmpprofileupdComponent,
    EhsmeditComponent,
    QualitycreComponent
  ],

  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
