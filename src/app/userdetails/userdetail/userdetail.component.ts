import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserdetailService } from 'src/app/shared/userdetail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
   cusId : number;
  constructor(public userdetailservice: UserdetailService,private route:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
  
    //get empId from ActivateRoute
    this.cusId=this.route.snapshot.params["CustomerId"];
    console.log(this.cusId);

    if(this.cusId!=0 || this.cusId!=null){
      console.log('hai');
     this.userdetailservice.getUserDetail(this.cusId).subscribe(
       result=>{
         
         console.log(result);


         this.userdetailservice.formData=Object.assign({},result);
       },
       error=>{
         console.log(error);
       }
       
     )
    }
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    
    let addId =this.userdetailservice.formData.CustomerId;
    if(addId==0||addId==null){
      //INSERT
     this.insertUserDetailRecord(form);
    }else{
     //update
     this.updateUserDetail(form);
    }
  }
  insertUserDetailRecord(form?:NgForm){
    console.log("inserting a record...");
    this.userdetailservice.insertUserDetail(form.value).subscribe(
      (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastrService.success('user record has been inserted','DatingApp v2022');
      },
      (error)=>{
        console.log(error);
      }

    
      
    )
  }

  updateUserDetail(form?:NgForm){
    console.log("updating a record...");
    this.userdetailservice.updateUserDetail(form.value).subscribe(
      (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastrService.success(' Record has been updated','DatingApp v2022');

      },
      (error)=>{
        console.log(error);
      }

    
      
    )
  }

  //clearall content after submit
  resetForm(form?:NgForm){
    if(form!=null){
      form.resetForm();
    }
  }
}
