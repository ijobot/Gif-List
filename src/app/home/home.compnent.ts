import { Component, inject } from '@angular/core';
import { GifListComponent } from './ui/gif-list.component';
import { RedditService } from '../shared/data-access/reddit.service';

@Component({
  selector: 'app-home',
  template: `
    <app-gif-list
      [gifs]="redditService.gifs()"
      class="grid-container"
    ></app-gif-list>
  `,
  imports: [GifListComponent],
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
