import { Component, OnInit } from "@angular/core";
import { PostInterface } from "../interfaces/post.interface";
import { MatDialog } from "@angular/material/dialog";
import { PostFormComponent } from "./post-form/post-form.component";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"],
})
export class SocialPostsComponent implements OnInit {
  posts: PostInterface[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onSubmit() {
    const dialogRef = this.dialog.open(PostFormComponent);
    const subscribeDialog = dialogRef.componentInstance.submitted.subscribe(
      (post: PostInterface) => {
        if (post) {
          this.posts.unshift({
            id: this.posts.length + 1,
            title: post.title,
            thought: post.thought,
          });
        }
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      subscribeDialog.unsubscribe();
    });
  }

  onDelete(post: PostInterface) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }
}
