import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/services/user-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: any;
  constructor(private userData: UserDataService) {
    userData.users().subscribe((data) => {
      this.users = data;
      console.warn(this.users);
    });
  }

  ngOnInit(): void {}
}
