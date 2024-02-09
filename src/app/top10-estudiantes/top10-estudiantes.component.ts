import { Component } from '@angular/core';
import { Musica } from '../musicas/musica';
import { MusicaService } from '../musicas/musica.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-top10-estudiantes',
  templateUrl: './top10-estudiantes.component.html',
  styleUrl: './top10-estudiantes.component.css'
})
export class Top10EstudiantesComponent {
  tituloTop10='Top 10 de Canciones';
  musicas: Musica[] | undefined;
  top10:Musica[]|undefined;
  p: number = 1;
  selectedTrackId: string | null = null;
  nombreBusqueda: string = '';

  constructor(private musicaService: MusicaService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.top10musicas();
  }

  top10musicas():void{
    this.musicaService.find10MostPopularMusica().subscribe(
      m=> this.top10 = m
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
