import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-http-firebase',
  templateUrl: './http-firebase.component.html',
  styleUrls: ['./http-firebase.component.css']
})
export class HttpFirebaseComponent implements OnInit {

  loadedPosts: [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: {title: string, content: string}) {
    this.http.post(
      'https://ng-backend-1da90.firebaseio.com/posts.json', 
      postData).subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.http.get('https://ng-backend-1da90.firebaseio.com/posts.json')
      .pipe(map(resData => {
        const postArray = [];
        for(const key in resData) {
          postArray.push({...resData[key], id: key})
        }
        return postArray;
      }))
      .subscribe(posts => {
        console.log(posts);
      })
  }

}
