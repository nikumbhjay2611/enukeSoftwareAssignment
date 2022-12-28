import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'JSONServerAPI';

  constructor(private rs : RestService){}

  
  dateTimes  = [];
  users = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        for (const key in response['Time Series (5min)']) {
          this.users.push({ key, value: response['Time Series (5min)'][key] });
        }
        
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }


}
