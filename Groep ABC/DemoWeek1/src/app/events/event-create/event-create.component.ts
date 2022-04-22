import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  public event : Event = new Event();

  constructor() { }

  ngOnInit(): void {
  }

  watdoetdit()
  {
      console.log(this.event);
  }

}
