import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Result } from './result.model';

@Injectable()
export class YoutubeService {
  header : HttpHeaders;
  apiUrl: string;
  apiKey: string;
 YOUTUBE_API_URL : string = 'https://www.googleapis.com/youtube/v3/search';
 YOUTUBE_API_KEY : string = 'AIzaSyBq566RCsOmdgGxEBiKOmjRU4_fIfChS_Q';

  constructor(private http: HttpClient) {
   }

   search(query: string) {
     this.apiKey  = this.YOUTUBE_API_KEY;
     this.apiUrl  = this.YOUTUBE_API_URL;
     const params: string = [
       `q=${query}`,
       `key=${this.apiKey}`,
       `part=snippet`,
       `type=video`,
       `maxResults=50`].join('&');
       const queryUrl = `${this.apiUrl}?${params}`;
       return this.http.get(queryUrl).
       pipe(
         map(
            response =>
             { return response["items"]
                      .map( item =>
                        item = new Result(item.snippet.title,item.snippet.description, item.snippet.channelTitle,item.snippet.thumbnails.default.url,item.id.videoId));}));
   }
}
