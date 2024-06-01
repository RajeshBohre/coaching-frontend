import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CommonService } from '../shared/services/common-service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {
  registerForm: any;
  loading = false;
  submitted = false;
  classList: any = [];
  subjectList: any = [];
  visible: boolean = false;
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private commonservice: CommonService
      ) { }

  ngOnInit() {
    
     this.initializationForm(); 
     this.subjectList = [
      {label: "Chemistry", value: "Chemistry" },
      {label: "Physics", value: "Physics" },
      {label: "Biology", value: "Biology" },
      {label: "English", value: "English" },
      {label: "Mathmatics", value: "Mathmatics" }
     ]
      this.classList = [{label: "11th", value: "11th"}, {label: "12th", value: "12th"},{label: "10th", value: "10th"}]
  }

  initializationForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      fathername: ['', Validators.required],
      phonenumber: ['', Validators.required],
      fphonenumber: ['', Validators.required],
      Address: ['', Validators.required],
      INumber: ['', [Validators.required, Validators.minLength(6)]],
      studentClass: ['', Validators.required],
      subject: ['', Validators.required],
      schoolName: ['', Validators.required],
      registrationDate: ['', Validators.required],
      totalFee: ['', Validators.required],
      comment: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      } else {
        this.commonservice.studentRegistration(this.registerForm.value).subscribe((response: any) => {
          console.log("Student Registered Successfully");
          this.visible = true;
          this.initializationForm()
        }
          
        )
      }

      //this.loading = true;
      
          
  }
}
