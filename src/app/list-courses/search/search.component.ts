import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() handlerSearch: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  onSearch(value: string): void {
    this.handlerSearch.emit(value);
  }
}
