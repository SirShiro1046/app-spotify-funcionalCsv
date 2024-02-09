import { Component } from '@angular/core';
import { Musica } from '../musicas/musica';
import { MusicaService } from '../musicas/musica.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-musica-sin-voces',
  templateUrl: './musica-sin-voces.component.html',
  styleUrl: './musica-sin-voces.component.css'
})
export class MusicaSinVocesComponent {
  titulo='Canciones sin voces';
  musicas: Musica[] | undefined;
  musicaOffVoice:Musica[]|undefined;
  p: number = 1;
  selectedTrackId: string | null = null;
  nombreBusqueda: string = '';

  constructor(private musicaService: MusicaService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.top10musicas();
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
