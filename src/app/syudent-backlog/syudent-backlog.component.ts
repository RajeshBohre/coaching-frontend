import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CommonService } from '../shared/services/common-service';

@Component({
  selector: 'app-syudent-backlog',
  templateUrl: './syudent-backlog.component.html',
  styleUrls: ['./syudent-backlog.component.scss']
})
export class SyudentBacklogComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  rowData: any[]= [
  ];
  studentData: any;
  feeData: any;
  studentName: any = [];
  paidToList: any = [];
  selectedName: any;
  selectedPaidTo: any;
  originalData: any;
  totalRecieved: Number = 0;
  totalStudentFees: Number = 0;
  totalRemainingFees: Number = 0;
  colDef: ColDef[]= [
    {field: "studentName"},
    {field: "fatherName"},
    {field: "phoneNumber"},
    {field: "contactNumber"},
    {field: "totalFee"},
    {field: "remainingFee"},
    {field: "recievedFee"},
    {field: "recievedBy"},
    {field: "Address"},
    {field: "lastRecievedDate"},
    {field: "comment"},
  ];
  ngOnInit(): void {
    //this.getStudentList();
    this.getStudentReport();
    this.getStudentFees();
  }
  getStudentList(){
    this.commonService.getStudentList().subscribe(data=> {
      if(data) {
        data.forEach((item: {firstName:any; paidTo: any}) =>{
          
          this.studentName.push({label: item.firstName, value: item.firstName}) 
          
        })
        
        
      }
    })
  }
  getStudentByPaidTo(event:any) {
    this.totalRecieved = 0;
    let temp: any = [];
    this.originalData.forEach((element :{recievedBy: any, recievedFee: any}) => {
      //let index = this.originalData.findIndex((item: {recievedBy: any}) => item.recievedBy == this.selectedPaidTo.value )
      if(element.recievedBy == this.selectedPaidTo.value) {
        temp.push(element);
        this.totalRecieved = Number(this.totalRecieved) + Number(element.recievedFee)
      }
    })
    
    
    if(temp.length != 0) {
      this.rowData = [];
      this.rowData = temp;
    }
    
  }
  getStudentByName(event: any) {
    this.rowData = [];
    let temp: any = [];
    let param = {firstName: 
      event.value.value
    }
    //let param = {studentName: event.value.value}
    this.commonService.getStudentBacklogByName(param).subscribe(data=> {
      if(data) {
        //this.rowData = data;
        data.forEach((item:{ firstName: any; fathername: any;
          Address:any; totalFee: any; phonenumber: any; fphonenumber: any}) => {
            let index = this.feeData.findIndex((element: {studentName: any}) => element.studentName.value == item.firstName )
            if(index != -1) {
              temp.push({
                studentName: item.firstName,
                fatherName: item.fathername,
                phoneNumber: item.phonenumber,
                contactNumber: item.fphonenumber,
                remainingFee: Number(item.totalFee)- this.feeData[index].amount,
                recievedFee: Number(this.feeData[index].amount),
                lastRecievedDate: this.feeData[index].paidOn,
                totalFee: item.totalFee,
                Address: item.Address
              })
            } else {
              temp.push({
                studentName: item.firstName,
                fatherName: item.fathername,
                phoneNumber: item.phonenumber,
                contactNumber: item.fphonenumber,
                remainingFee: Number(item.totalFee)- 0,
                recievedFee: 0,
                lastRecievedDate: '',
                totalFee: item.totalFee,
                Address: item.Address
              })
            }
            //this.totalRecieved = Number(this.totalRecieved) + Number(item.totalFee)
      })
      this.rowData = temp;
      }
    })
  } 
  getStudentReport() {
    this.commonService.getStudentList().subscribe(data=> {
      if(data) {
        console.log("monthly exp",data)
        this.studentData = data;
        //this.rowData = data;
      }
    })
  }
  getStudentFees() {
    let temp:any = []
    this.rowData = [];
    this.commonService.getStudentFees().subscribe(data => {
      if(data) {
        this.feeData = data;
        this.feeData.forEach((element: {paidTo: any;}) => {
          if(element.paidTo.value != null){
            let index = this.paidToList.findIndex((paidItem: any )=>  paidItem.value == element.paidTo.value)
            if(index == -1){
              this.paidToList.push({label: element.paidTo.value, value: element.paidTo.value})
            }
            
          }
        })
        
        if(this.studentData) {
          this.studentData.forEach((item:{ firstName: any; fathername: any;
            Address:any; totalFee: Number; phonenumber: any; fphonenumber: any}) => {
              let index = this.feeData.findIndex((element: {studentName: any}) => element.studentName.value == item.firstName )
              if(index != -1) {
                temp.push({
                  studentName: item.firstName,
                  fatherName: item.fathername,
                  phoneNumber: item.phonenumber,
                  contactNumber: item.fphonenumber,
                  remainingFee: Number(item.totalFee)- this.feeData[index].amount,
                  recievedFee: Number(this.feeData[index].amount),
                  recievedBy: this.feeData[index].paidTo.value,
                  lastRecievedDate: new Date(this.feeData[index].paidOn).toDateString(),
                  totalFee: item.totalFee,
                  Address: item.Address
                })
                
                this.totalRecieved = Number(this.totalRecieved) + Number(this.feeData[index].amount)
              } else {
                temp.push({
                  studentName: item.firstName,
                  fatherName: item.fathername,
                  phoneNumber: item.phonenumber,
                  contactNumber: item.fphonenumber,
                  remainingFee: Number(item.totalFee)- 0,
                  recievedFee: 0,
                  recievedBy: '',
                  lastRecievedDate: '',
                  totalFee: item.totalFee,
                  Address: item.Address
                })
              }
              this.totalStudentFees = Number(this.totalStudentFees) + Number(item.totalFee)
              
        })
        this.rowData = temp;
        this.rowData.forEach((amount : {remainingFee: any})=> {
          this.totalRemainingFees = this.totalRemainingFees + amount.remainingFee;
        })
        this.originalData = JSON.parse(JSON.stringify(temp))
        this.getStudentList();
        }
      }
   
  })
  }

}
