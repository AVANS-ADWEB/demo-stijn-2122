import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public events = [
    "Paaspop", "Pinkpop", "Koningsdag", "5 Mei"
  ];

  constructor() { }

  ngOnInit(): void {
    //Hey Service, geef efven aan als er nieuwe events zijn
  }

  

}
