import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  users: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        console.log('res', res);
      });
  }
}
