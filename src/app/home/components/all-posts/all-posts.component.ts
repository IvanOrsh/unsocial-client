import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  queryParams!: string;
  allLoadedPosts: Post[] = [];
  numberOfPosts = 5;
  skipPosts = 0;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts(false); // Call the getPosts() method here
  }

  getPosts(isInitialLoad: boolean) {
    if (this.skipPosts === 20) this.infiniteScroll.disabled = true;

    // take=10&skip=0
    this.queryParams = `?take=${this.numberOfPosts}&skip=${this.skipPosts}`;

    this.postService.getSelectedPosts(this.queryParams).subscribe(
      (posts: Post[]) => {
        for (let post = 0; post < posts.length; post++) {
          this.allLoadedPosts.push(posts[post]);
        }

        if (isInitialLoad) this.infiniteScroll.complete();

        this.skipPosts = this.skipPosts + 5;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadData(ev: any) {
    this.getPosts(true);
  }
}
