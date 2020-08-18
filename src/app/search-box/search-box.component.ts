import { Component, OnInit, Output, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { Result} from '../result.model';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  results: Result[] = new Array<Result>();
  @ViewChild("channelName") channelName : ElementRef;
   videoResults: Result[] = new Array<Result>();
  constructor(private youtube : YoutubeService) { }

  ngOnInit(): void {

  }
  getChannels(){
    var channel = this.channelName.nativeElement.value;
    this.youtube.search(channel).subscribe(
      (data) => {console.log(data);
        this.results= data;
      }
    );
  }
}
