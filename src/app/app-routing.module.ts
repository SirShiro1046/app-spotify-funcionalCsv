import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicasComponent } from './musicas/musicas.component';
import { Top10EstudiantesComponent } from './top10-estudiantes/top10-estudiantes.component';
import { MusicaSinVocesComponent } from './musica-sin-voces/musica-sin-voces.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
  { path: '', redirectTo: '/musicas', pathMatch: 'full' },  // Redirección al iniciar la aplicación
  { path: 'musicas', component: MusicasComponent },
  { path: 'top10', component: Top10EstudiantesComponent },
  {path : 'musicasOffVoice',component: MusicaSinVocesComponent},
  {path: 'artistas',component:ArtistasComponent},
  {path: 'albums',component:AlbumsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
