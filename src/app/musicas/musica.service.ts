import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from './musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private url:string="http://localhost:8080/api/spotify";
  constructor(private http:HttpClient) { }

  //obtener Musica
  getAll():Observable<Musica[]>{
    return this.http.get<Musica[]>(this.url);
  }
  findAllMusicaByName(music: string): Observable<Musica[]> {
    const searchUrl = `${this.url}/musica/${music}`;
    return this.http.get<Musica[]>(searchUrl);
  }

  findMusicSpecificOfArtist(music: string):Observable<Musica[]> {
    const searchUrl = `${this.url}/musica/artists/${music}`;
    return this.http.get<Musica[]>(searchUrl);
  }

  findAllMusicaByArtist(music: string):Observable<Musica[]> {
    const searchUrl = `${this.url}/artist/${music}`;
    return this.http.get<Musica[]>(searchUrl);
  }
  find10MostPopularMusica():Observable<Musica[]> {
    return this.http.get<Musica[]>(this.url+'/musica/most10popularity');
  }
  
  findAllMusicVoiceOff():Observable<Musica[]> {
    return this.http.get<Musica[]>(this.url+'/musica/voiceoff');
  }

  findAllArtist():Observable<string[]>{
    return this.http.get<string[]>(this.url+'/artist');
  }

  findNumberTotalMusicaByArtist(artis:string):Observable<number>{
    const searchUrl = `${this.url}/total/${artis}`;
    return this.http.get<number>(searchUrl);
    
  }
  findAlbums():Observable<string[]>{
    return this.http.get<string[]>(this.url+'/album');
  }

}
