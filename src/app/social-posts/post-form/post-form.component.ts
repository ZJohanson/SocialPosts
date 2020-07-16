import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PostInterface } from "../../interfaces/post.interface";
import { FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<PostInterface>();
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  submitPost(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    console.log(form.value.title);
    console.log(form.value.thought);
    this.submitted.emit({
      id: null,
      title: form.value.title,
      thought: form.value.thought,
    });
  }
}
