import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicasComponent } from './musicas/musicas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { Top10EstudiantesComponent } from './top10-estudiantes/top10-estudiantes.component';
import { MusicaSinVocesComponent } from './musica-sin-voces/musica-sin-voces.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { ArtistasMasCancionesComponent } from './artistas-mas-canciones/artistas-mas-canciones.component';
import { AlbumsComponent } from './albums/albums.component';
import { GenerosComponent } from './generos/generos.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicasComponent,
    HeaderComponent,
    SideNavComponent,
    Top10EstudiantesComponent,
    MusicaSinVocesComponent,
    ArtistasComponent,
    ArtistasMasCancionesComponent,
    AlbumsComponent,
    GenerosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
