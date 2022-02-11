import { Component, OnInit } from '@angular/core';
import { UserdetailService } from 'src/app/shared/userdetail.service'
@Component({
  selector: 'app-userdetail-list',
  templateUrl: './userdetail-list.component.html',
  styleUrls: ['./userdetail-list.component.scss']
})
export class UserdetailListComponent implements OnInit {
  page:number =1;
  filter:string;
  constructor(public userdetailservice: UserdetailService) { }

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");

    this.userdetailservice.bindListUserDetails();
  }
  deleteUserDetail(cusId: number) {
    if (confirm('Are u want to delete this record')) {
      this.userdetailservice.deleteUserDetail(cusId).subscribe(
        response => {
          this.userdetailservice.bindListUserDetails();

        }, error => {
          console.log(error);
        });


    }
  }

  // getEmployees() {
  //   this.employeeService.getAllEmployees().subscribe(
  //     response => {
  //       console.log('retrieving data');
  //       console.log(response);
  //       console.log("Welcome to lifecycle hook");

  //       // this.getEmployees();   //1

  //       this.employeeService.bindListEmployees();

  //     },
  //     error => {
  //       console.log('something wrong');
  //       console.log(error);
  //     }
  //   );
  // }
}
