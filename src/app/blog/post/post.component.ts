import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { PostI } from '../blog.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public posts$: Observable<PostI[]>;
  @Input() post: PostI;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.posts$ = this.blogService.getAllPosts();
  }
}
