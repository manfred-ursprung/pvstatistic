import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-rest-service',
  templateUrl: './rest-service.component.html',
  styleUrls: ['./rest-service.component.css']
})
export class RestServiceComponent implements OnInit {

  url: string;
  response: string;
  observable: Observable<any>;


  constructor() { }

  ngOnInit() {
    this.url = 'https://jsonplaceholder.typicode.com/posts/1';
      /* fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
          .then(json => console.log(json));
      */
      this.setObservable();
  }


  fetch() {
    this.observable.subscribe((resp) => {
      if (resp.userId) {
        this.response = 'Id: ' + resp.id + ' UserId: ' + resp.userId + ' body: ' + resp.body;
      }
      if (resp.name) {
          this.response = 'Id: ' + resp.id + ' Name: ' + resp.name + ' body: ' + resp.body;
      }
      console.log(resp);
    });
    this.url = 'https://jsonplaceholder.typicode.com/comments/1';
    this.setObservable();
  }

  setObservable() {
      this.observable = ajax.get(this.url).pipe(
          map(event => event.response)
      );
  }

}
