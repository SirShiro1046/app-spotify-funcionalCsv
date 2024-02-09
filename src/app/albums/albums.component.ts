import { Component } from '@angular/core';
import { Musica } from '../musicas/musica';
import { MusicaService } from '../musicas/musica.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  
  titulo='Lista de Albums';
  musicas: Musica[] | undefined;
  musicaOffVoice:Musica[]|undefined;
  artistas: string[]|undefined;
  p: number = 1;
  selectedTrackId: string | null = null;
  nombreBusqueda: string = '';

  constructor(private musicaService: MusicaService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.obtenerTodosLosArtistas();
  }

  obtenerTodosLosArtistas(): void {
   this.musicaService.findAlbums().subscribe(
    a=> this.artistas=a
   );
  }


  obtenerTotalCanciones(artist: string): Observable<number> {
    return this.musicaService.findNumberTotalMusicaByArtist(artist);
  }

  

  top10musicas():void{
    this.musicaService.findAllMusicVoiceOff().subscribe(
      m=> this.musicaOffVoice = m
    );
  }

  getSafeUrl(trackId: string): SafeResourceUrl {
    const url = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadSpotifyFrame(trackId: string): void {
    this.selectedTrackId = trackId;
  }



}
