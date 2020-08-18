export class Result{
  title: string;
  description: string;
  channel: string;
  url: string;
  videoId: string;

  constructor( title: string, description: string, channel: string, url: string, videoId: string){
    this.title = title;
    this.description = description;
    this.channel = channel;
    this.url = url;
    this.videoId = videoId;
  }
}
