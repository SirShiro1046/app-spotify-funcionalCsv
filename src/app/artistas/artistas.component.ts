import { Component } from '@angular/core';
import { Musica } from '../musicas/musica';
import { MusicaService } from '../musicas/musica.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})
export class ArtistasComponent {
  titulo='Lista de Artistas';
  musicas: Musica[] | undefined;
  musicaOffVoice:Musica[]|undefined;
  artistas: { nombre: string; totalMusicas: string; }[] = [];
  p: number = 1;
  selectedTrackId: string | null = null;
  nombreBusqueda: string = '';

  constructor(private musicaService: MusicaService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.obtenerTodosLosArtistas();
  }

  obtenerTodosLosArtistas(): void {
    this.musicaService.findAllArtist().subscribe(
      resultado => {
        // Verificar que resultado sea un array de strings antes de aplicar el map
        if (Array.isArray(resultado)) {
          // Dividir cada elemento por el "|" y formar un array de objetos
          this.artistas = resultado.map(item => {
            const partes = item.split('|');
            return {
              nombre: partes[0] || '', // Acceder al nombre, usar un valor por defecto si no existe
              totalMusicas: partes[1] || '0' // Acceder al total de músicas, usar '0' por defecto si no existe
            };
          });
        } else {
          console.error('El resultado no es un array:', resultado);
        }
      }
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
