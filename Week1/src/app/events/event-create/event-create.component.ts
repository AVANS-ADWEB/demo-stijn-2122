import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  public eventForm: NgForm;
  public event: any;
  // public event: Event = new Event();
  
  constructor() { }

  ngOnInit(): void {
  }

  add(form: any)
  {
    console.log(form.value);
    //Hey ik heb een nieuw event voor je
  }

}
