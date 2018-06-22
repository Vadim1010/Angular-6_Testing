import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  @Output() handlerSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searc: ['', Validators.required]
    });
  }

  onSearch(): void {
    this.handlerSearch.emit(this.searchForm.value.searc);
  }
}
