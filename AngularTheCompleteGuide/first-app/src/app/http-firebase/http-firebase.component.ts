import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-http-firebase',
  templateUrl: './http-firebase.component.html',
  styleUrls: ['./http-firebase.component.css']
})
export class HttpFirebaseComponent implements OnInit {

  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    })
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    })
  }

  clearPosts() {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }

}
