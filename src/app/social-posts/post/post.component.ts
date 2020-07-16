import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PostInterface } from "../../interfaces/post.interface";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  @Input() post: PostInterface;
  @Output() deleted = new EventEmitter<PostInterface>();

  constructor() {}

  ngOnInit(): void {}
  deletePost(post: PostInterface) {
    this.deleted.emit(post);
  }
}
