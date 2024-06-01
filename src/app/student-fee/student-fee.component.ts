import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-student-fee',
  templateUrl: './student-fee.component.html',
  styleUrls: ['./student-fee.component.scss']
})
export class StudentFeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private commonservice: CommonService) { }
  feeForm: any;
  loading = false;
  submitted = false;
  students: any = [{label: "test", value: "test"}];
  subjectList: any = [];
  visible: boolean = false;
  paidToList:any = [
    {
      label: "Jitendra Bohare", value : "Jitendra Bohare"},
      {label: "Vijay Bhagat", value : "Vijay Bhagat"},
      {label: "Piratlal Krupgahe", value : "Piratlal Krupgahe"
    }
  ]
  ngOnInit(): void {
    this.feeForm = this.formBuilder.group({
      studentName: ['', Validators.required],
      amount: ['', Validators.required],
      paidTo: ['', Validators.required],
      paidBy: ['', Validators.required],
      paidOn: ['', Validators.required],
      transactionMode: ['', Validators.required],
      comment: ['', Validators.required],
      
  });
    this.subjectList = [
      {label: "Chemistry", value: "Chemistry" },
      {label: "Physics", value: "Physics" },
      {label: "Biology", value: "Biology" },
      {label: "English", value: "English" },
      {label: "Mathmatics", value: "Mathmatics" }]
    this.commonservice.getStudentList().subscribe(data=> {
      if(data) {
        console.log("monthly exp",data)
        data.forEach((item: { firstName: any; }) => {
          this.students.push({label: item.firstName, value: item.firstName}); 
        })
        
      }
    })
  }

  get f() { return this.feeForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.visible = true
    // stop here if form is invalid
    if (this.feeForm.invalid) {
        return;
    } else {
      this.commonservice.feesSubmission(this.feeForm.value).subscribe((response: any) => {
        
        this.visible = true;
        console.log("Student Registered Successfully");
      }
        
      )
    }

    //this.loading = true;
    
        
}
}


