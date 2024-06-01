import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CommonService } from '../shared/services/common-service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  rowData: any[]= [
    
  ];
  
  selectedName: any;
  currentYear: String ='';
  monthList: any = [];
  selectedClass: any;
  studentName: any = [];
  studentClass: any = [];
  selectedRowId: any;
  visible: boolean = false;
  colDef: ColDef[]= [
    {field: "firstName"},
    {field: "fathername"},
    {field: "phonenumber"},
    {field: "fphonenumber"},
    {field: "INumber"},
    {field: "Address"},
    {field: "subject"},
    {field: "studentClass"},
    {field: "registrationDate"},
    {field: "totalFee"},
    {field: "comment"},
  ];
  ngOnInit(): void {
    this.getStudentList();
  }
  getStudentList(){
    this.commonService.getStudentList().subscribe(data=> {
      if(data) {
        console.log("monthly exp",data)
        this.rowData = data;
        this.rowData.forEach((item: {firstName:any; studentClass: any}) =>{
          
          this.studentName.push({label: item.firstName, value: item.firstName}) 
        })
        this.studentClass.push({label: "11th", value: "11th"}, 
        {label: "10th", value: "10th"}, {label: "12th", value: "12th"})
        
      }
    })
  }
  getStudentByName(event: any) {
    this.rowData = [];
    let param = {firstName: event.value.value}
    this.commonService.getStudentByName(param).subscribe(data=> {
      if(data) {
        console.log("monthly exp by month",data)
        
        this.rowData = data;
        
      }
    })

  }
  onRowClicked(event: any) { 
    console.log('row', event); 
    this.selectedRowId = event.data._id;
  }
  removeStudent() {
    let param = {
      id: this.selectedRowId
    }
    this.visible = true;
    // this.commonService.removeStudent(param).subscribe(res => {
    //   console.log("Student removed successfuly");
    //   this.rowData = [];
    //   this.getStudentList();
    // })
  }
  removeNo() {
    this.visible = false;
    return;
  }
  removeConfirm(){
    this.visible = false;
    let param = {
      id: this.selectedRowId
    }
    
    this.commonService.removeStudent(param).subscribe(res => {
      console.log("Student removed successfuly");
      this.rowData = [];
      this.getStudentList();
    })
  }
  getStudentByClass(event: any) {
    this.rowData = [];
    let param = {studentClass: {
      label: event.value.value,
      value: event.value.value
    }}
    
    this.commonService.getStudentByClass(param).subscribe(data=> {
      if(data) {
        console.log("monthly exp by month",data)
        
        this.rowData = data;
        
      }
    })

  }
  
}
