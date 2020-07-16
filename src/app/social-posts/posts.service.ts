import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { PostInterface } from "../interfaces/post.interface";
import { PostFormComponent } from "./post-form/post-form.component";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  title: string;
  thought: string;
  constructor(public dialog: MatDialog) {}
  openDialog(): Observable<PostInterface> {
    const dialogRef = this.dialog.open(PostFormComponent, {
      data: { title: this.title, thought: this.thought },
    });

    return dialogRef.afterClosed();
  }
}
