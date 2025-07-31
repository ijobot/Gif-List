import { Component, input } from '@angular/core';
import { Gif } from '../../shared/interfaces';

@Component({
  selector: 'app-gif-list',
  imports: [],
  template: `
    @for (gif of gifs(); track gif.permalink){
    <div>
      {{ gif.title }}
    </div>
    }
  `,
  styles: ``,
})
export class GifListComponent {
  gifs = input.required<Gif[]>();
}
