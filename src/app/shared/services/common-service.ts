import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class CommonService {
constructor(private http: HttpClient) { }
url: String = 'http://localhost:8082/api/'
//url: String = 'https://coaching-hbwp.onrender.com/api/';
userRole: any;
studentRegistration(student: any) {
    return this.http.post(this.url + 'StudentRegistration/', student).
    pipe(map(
        (data: any) => {return data;}), 
        catchError( error => {
            return throwError( 'Something went wrong!' );
        })
    )
}

feesSubmission(fee: any) {
    return this.http.post(this.url + 'feeSubmission/', fee).
    pipe(map(
        (data: any) => {return data;}), 
        catchError( error => {
            return throwError( 'Something went wrong!' );
        })
    )
}
removeStudent(id: any) {
    return this.http.post(this.url + 'deleteUser/', id).
    pipe(map(
        (data: any) => {return data;}), 
        catchError( error => {
            return throwError( 'Something went wrong!' );
        })
    )
}   
getStudentList() {
    return this.http.get(this.url + 'getStudentList/').pipe(map((data: any) => {
        return data;}), catchError(error => {
            return throwError('Something went wrong!');})
)}

getStudentFees() {
    return this.http.get(this.url + 'getStudentFee/').pipe(map((data: any) => {
        return data;}), catchError(error => {
            return throwError('Something went wrong!');})
)}

getStudentByClass(byClass:any){
    return this.http.post(this.url + 'getStudentByClass/', byClass).
    pipe(map(
        (data: any) => {return data;}), 
        catchError( error => {
            return throwError( 'Something went wrong!' );
        })
    )
}
getStudentFeeByPaidTo(paidTo:any){
    return this.http.post(this.url + 'getStudentFeeByPaidTo/', paidTo).
    pipe(map(
        (data: any) => {return data;}), 
        catchError( error => {
            return throwError( 'Something went wrong!' );
        })
    )
}
getStudentBacklogByName(firstName: any) {
    return this.http.post(this.url + 'getStudentBacklogByName/', firstName).
    pipe(map(
        (data: any) => {return data;}), 
        catchError( error => {
            return throwError( 'Something went wrong!' );
        })
    )
}            

getStudentByName(firstName: any) {
    return this.http.post(this.url + 'getStudentByName/', firstName).
    pipe(map(
        (data: any) => {return data;}), 
        catchError( error => {
            return throwError( 'Something went wrong!' );
        })
    )
}            
getBacklogByFlat(flatNo:any) {
    return this.http.post(this.url + 'getBacklogByFlat/', flatNo).
    pipe(map(
        (data: any) => {return data;}), 
        catchError( error => {
            return throwError( 'Something went wrong!' );
        })
    )
}
updateBacklog(feeData:any) {
    return this.http.patch(this.url + 'updateBacklog/', feeData).
    pipe(map(
        (data: any) => {return data;}), 
        catchError( error => {
            return throwError( 'Something went wrong!' );
        })
    )
}

}