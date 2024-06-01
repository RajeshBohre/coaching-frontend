import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cols:any = [];
  cars:any;
  activeItem: any;
  items: any = [];
  login:any;
  password:any;
  path:any
  role: any;
  isLoginSuccess:boolean = false;
  activeUrl:boolean = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.url.subscribe(res => {
      this.path = res[0].path;
      console.log(res[0].path)
    })
    this.role = "Admin"
      if(this.role== "Admin") {
          this.items = [{ label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home'},
                        { label: 'Registration', icon: 'pi pi-fw pi-calendar', routerLink: 'registration' },
                        { label: 'Student List', icon: 'pi pi-fw pi-pencil', routerLink: 'studentlist' },
                        { label: 'Student Fee', icon: 'pi pi-fw pi-file', routerLink: 'studentfee'},
                        { label: 'Backlog List', icon: 'pi pi-fw pi-cog',routerLink: 'backlog' }];
        
      } else {
        this.items = [
                        { label: 'Monthly Maintanence', icon: 'pi pi-fw pi-calendar', routerLink: 'monthlyMaintanence' },
                        { label: 'Monthly Expenses', icon: 'pi pi-fw pi-pencil', routerLink: 'monthlyExpenses' },
                        { label: 'Total Maintanence', icon: 'pi pi-fw pi-file', routerLink: 'totalMaintanence'},
                        { label: 'Backlog List', icon: 'pi pi-fw pi-cog',routerLink: 'totalExpenses' }];
        
      }
      console.log(this.route.snapshot.routeConfig?.path, 'path');
      if(this.route.snapshot.routeConfig?.path == 'home') {
        this.activeUrl = true;
      }
    
  }
loginSubmit(){
  this.isLoginSuccess = true;
}
  onActiveItemChange(event: any) {
   // console.log(event);
  }
  activateLast() {

  }
}
