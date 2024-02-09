import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{
  @Input() sideNavStatus: boolean = false;

  constructor(private router: Router){

  }

  ngOnInit(): void {
  }

  navegaAtodasLasMusicas() {
    this.router.navigate(['/musicas']);
  }
  navegaATop10Musicas(){
    this.router.navigate(['/top10']);
  }
  navegaAMusicasOffVoice(){
    this.router.navigate(['/musicasOffVoice']);
  }
  navegaAtodosLosArtistas(){
    this.router.navigate(['/artistas'])
  }
  navegaAtodosLosAlbums(){
    this.router.navigate(['/albums'])
  }

}
