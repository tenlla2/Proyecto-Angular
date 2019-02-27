import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  APIKey = 'AIzaSyDO5PwcRC827tOvZs36y-goBAABLS2Tav8';
  videos = [];
  canales = [];
  tokenVideo = '';
  tokenCanal = '';
  videoActual = {
    title: "",
    description: "",
    likes: null,
    dislikes: null,
    views: null,
  };
  canalActual = {
    imagen: "",
    title: "",
    subscribers: null,
    comments: null,
    videos: null
  }

  constructor(private http: HttpClient) {

  }

  primeraPeticionVideo(){
    this.http
      .get<any>(
        'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&type=video&key=' +
          this.APIKey
      )
      .subscribe(data => {
        console.log(data)
        this.videos = [];
        for(let i = 0; i < data.items.length; i++){
          let video = data.items[i];
          this.videos.push(video);
        }
        this.tokenVideo = data.nextPageToken;
      });
  }

  primeraPeticionCanal(){
    this.http
      .get<any>(
        'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&type=channel&key=' +
          this.APIKey
      )
      .subscribe(data => {
        console.log(data)
        this.canales = [];
        for(let i = 0; i < data.items.length; i++){
          let canal = data.items[i];
          this.canales.push(canal);
        }
        this.tokenCanal = data.nextPageToken;
      });
  }
  nuevaPeticionVideo(){
    this.http
      .get<any>(
        'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&type=video&pageToken=' + this.tokenVideo + '&key=' +
          this.APIKey
      )
      .subscribe(data => {
        for(let i = 0; i < data.items.length; i++){
          let video = data.items[i];
          this.videos.push(video);
        }
        this.tokenVideo = data.nextPageToken;
      });
  }

  nuevaPeticionCanal(){
    this.http
      .get<any>(
        'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&type=channel&pageToken=' + this.tokenCanal + '&key=' +
          this.APIKey
      )
      .subscribe(data => {
        for(let i = 0; i < data.items.length; i++){
          let canal = data.items[i];
          this.canales.push(canal);
        }
        this.tokenCanal = data.nextPageToken;
      });
  }

  buscarVideo(texto){
    this.http
      .get<any>(
        'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&type=video&q=' + texto + '&key=' +
          this.APIKey
      )
      .subscribe(data => {
        this.videos = [];
        for(let i = 0; i < data.items.length; i++){
          let video = data.items[i];
          this.videos.push(video);
        }
        this.tokenVideo = data.nextPageToken;
      });
  }

  buscarCanal(texto){
    this.http
      .get<any>(
        'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&type=channel&q=' + texto + '&key=' +
          this.APIKey
      )
      .subscribe(data => {
        this.canales= [];
        for(let i = 0; i < data.items.length; i++){
          let canal = data.items[i];
          this.canales.push(canal);
        }
        this.tokenCanal = data.nextPageToken;
      });
  }

  detallesVideo(id){
    this.http
      .get<any>(
        'https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=' + id + '&key=' +
          this.APIKey
      )
      .subscribe(data => {
        this.videoActual.title = data.items[0].snippet.title;
        this.videoActual.description = data.items[0].snippet.description;
        this.videoActual.likes = data.items[0].statistics.likeCount;
        this.videoActual.dislikes = data.items[0].statistics.dislikeCount;
        this.videoActual.views = data.items[0].statistics.viewCount;
      });
  }

  detallesCanal(id){
    this.http
      .get<any>(
        'https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=' + id + '&key=' +
          this.APIKey
      )
      .subscribe(data => {
        this.canalActual.imagen = data.items[0].snippet.thumbnails.high.url;
        this.canalActual.title = data.items[0].snippet.title;
        this.canalActual.subscribers = data.items[0].statistics.subscriberCount;
        this.canalActual.comments = data.items[0].statistics.commentCount;
        this.canalActual.videos = data.items[0].statistics.videoCount;
      });
  }
}
