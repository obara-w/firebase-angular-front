import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  host: {'class': 'd-flex flex-column h-100'}
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
