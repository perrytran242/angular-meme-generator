import {
  Component,
  OnChanges,
  ElementRef,
  Input} from '@angular/core';

@Component({
  selector: 'app-html-image',
  templateUrl: './html-image.component.html',
  styleUrls: ['./html-image.component.scss']
})
export class HtmlImageComponent implements OnChanges {
  @Input() image;
  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes) {
    this.elementRef.nativeElement.innerHTML = '';

    if (changes.image && changes.image.currentValue && changes.image.currentValue.cloneNode) {
      this.elementRef.nativeElement.appendChild(
        (changes.image.currentValue as HTMLImageElement).cloneNode()
      );
    }
  }
}
