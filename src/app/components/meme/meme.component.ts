import { Component, OnInit } from '@angular/core';
import { MemeService } from 'src/app/services/meme.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {
  memeData;
  currentMeme;

  constructor(
    private memeservice: MemeService
  ) { }

  ngOnInit() {
    this.memeservice.getMemes().subscribe(res => {
      this.memeData = res;

      console.log(this.memeData);
    });

    // this.currentMeme = this.memeData[]
  }

}
