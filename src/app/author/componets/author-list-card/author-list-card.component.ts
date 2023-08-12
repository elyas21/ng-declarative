import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-list-card',
  templateUrl: './author-list-card.component.html',
  styleUrls: ['./author-list-card.component.scss']
})
export class AuthorListCardComponent {
@Input()
authors: any;
}
