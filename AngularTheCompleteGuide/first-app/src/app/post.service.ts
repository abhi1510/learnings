import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const newPost: Post = { title: title, content: content };
        this.http.post<{ name: string }>('https://ng-backend-1da90.firebaseio.com/posts.json', newPost)
            .subscribe(resData => {
                console.log(resData);
            })

    }

    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>('https://ng-backend-1da90.firebaseio.com/posts.json')
            .pipe(map(resData => {
                const postArray: Post[] = [];
                for (const key in resData) {
                    if (resData.hasOwnProperty(key)) {
                        postArray.push({ ...resData[key], id: key })
                    }
                }
                return postArray;
            }));
    }

    deletePosts() {
        return this.http.delete('https://ng-backend-1da90.firebaseio.com/posts.json');
    }

}