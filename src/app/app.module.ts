import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFeeComponent } from './student-fee/student-fee.component';
import { SyudentBacklogComponent } from './syudent-backlog/syudent-backlog.component';
import { HeaderComponent } from './header/header.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { AgGridModule } from "ag-grid-angular";
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { CommonService } from './shared/services/common-service';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentRegistrationComponent,
    StudentListComponent,
    StudentFeeComponent,
    SyudentBacklogComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TabMenuModule,
    DropdownModule,
    ReactiveFormsModule,
    DialogModule,
    CardModule,
    AgGridModule,
    MultiSelectModule,
    CalendarModule,
    InputTextModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
