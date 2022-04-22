import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public events: any[] = [
    { name: 'Paaspop', date: '17/04/2022'},
    { name: 'Carnaval!', date: '11/11/11' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
