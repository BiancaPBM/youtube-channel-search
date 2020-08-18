import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../result.model';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {
  @Input()result: Result;
  linkToWatch:string = "";
  constructor() { }

  ngOnInit(): void {
    this.linkToWatch = "www.youtube.com/watch?v=" + this.result.videoId;

  }

}
