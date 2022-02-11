import { Component, OnInit } from '@angular/core';
import { UserdetailService } from '../shared/userdetail.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
 hobby:string;
  constructor(public userdetailservice: UserdetailService) { }

  ngOnInit(): void {
    this.userdetailservice.userHobby().subscribe(

      response=>{

        console.log(response);

       

      },

      error=>{

        this.hobby= error.error.text;

      }

    );
  }

}
