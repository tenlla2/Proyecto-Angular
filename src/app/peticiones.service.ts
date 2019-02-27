import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  APIKey = 'AIzaSyDO5PwcRC827tOvZs36y-goBAABLS2Tav8';
  videos = [];
  tokenVideo = '';

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
          video.verMas = true;
          this.videos.push(video);
        }
        this.tokenVideo = data.nextPageToken;
      });
  }
}
