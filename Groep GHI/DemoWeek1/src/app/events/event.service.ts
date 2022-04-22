import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Event } from './Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  public events: Event[] = [];

  public $events : BehaviorSubject<Event[]>;

  constructor() { 
    this.$events = new BehaviorSubject<Event[]>([]);
  }

  add(event: Event) {
    this.events.push(event);
    this.$events.next(this.events);
  }

}
