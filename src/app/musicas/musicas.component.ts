import { Component } from '@angular/core';
import { Musica } from './musica';
import { MusicaService } from './musica.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent {
  musicas: Musica[] | undefined;
  artistas: string[]|undefined;
  p: number = 1;
  selectedTrackId: string | null = null;
  nombreBusqueda: string = '';

  constructor(private musicaService: MusicaService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.obtenerTodasLasMusicas();
  }

  obtenerTodasLasMusicas(): void {
    this.musicaService.getAll().subscribe(
      m => this.musicas = m
    );
  }

  obtenerTodosLosArtistas():void{
    this.musicaService.findAllArtist().subscribe(
      a => this.artistas=a
    );
  }

  buscarPorNombre(): void {
    if (this.nombreBusqueda.trim() !== '') {
      this.musicaService.findAllMusicaByName(this.nombreBusqueda).subscribe(
        m => {
          if (m.length === 0) {
            // Si no se encontraron canciones, buscar por nombre y artista
            this.musicaService.findMusicSpecificOfArtist(this.nombreBusqueda).subscribe(
              specificMusic => {
                if (specificMusic.length === 0) {
                  // Si no se encontraron canciones con el nombre y artista, buscar por artista
                  this.musicaService.findAllMusicaByArtist(this.nombreBusqueda).subscribe(
                    artistMusic => this.musicas = artistMusic,
                    error => console.error(error)  // Manejar errores si es necesario
                  );
                } else {
                  this.musicas = specificMusic;
                }
              },
              error => console.error(error)  // Manejar errores si es necesario
            );
          } else {
            this.musicas = m;
          }
        },
        error => console.error(error)  // Manejar errores si es necesario
      );
    } else {
      this.obtenerTodasLasMusicas();
    }
  }
  getSafeUrl(trackId: string): SafeResourceUrl {
    const url = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadSpotifyFrame(trackId: string): void {
    this.selectedTrackId = trackId;
  }
}
