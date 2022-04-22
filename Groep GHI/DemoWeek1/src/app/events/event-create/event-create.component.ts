import { Component, OnInit } from '@angular/core';
import { Event } from '../Event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  public event: Event = new Event();

  constructor(public eventService: EventService) { }

  ngOnInit(): void {
  }

  addEvent()
  {
    //add to list
    this.eventService.add(this.event)
    this.event = new Event(); //rest form
  }

}
