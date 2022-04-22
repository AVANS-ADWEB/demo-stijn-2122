import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public events: any[] = [];

  constructor(public eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.$events.subscribe(events => {
      this.events = events;
    })
    //service.vertelmeekkesalsjeeennieuweventhebt
      //this.events.add
  }

}
