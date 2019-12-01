import { Component, OnInit } from '@angular/core';
import { MemeService } from './services/meme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private memeservice: MemeService
  ) {}
  title = 'meme';


  ngOnInit() {
  }
}
