import { Component, OnInit } from '@angular/core';
import { Entry } from '../Classes/Entry';
import {PventriesService} from '../pventries.service';

@Component({
  selector: 'app-datainput',
  templateUrl: './datainput.component.html',
  styleUrls: ['./datainput.component.css']
})
export class DatainputComponent implements OnInit {
  entry: Entry;
  response: any;

  constructor(
      private pvEntries: PventriesService
  ) { }

  ngOnInit() {
    this.entry = new Entry();
    this.reset();
  }

  save() {
    this.response = 'Der Eintrag mit Datum :' + this.entry.date + ' Zählerstand : ' + this.entry.counter;
    this.pvEntries.add(this.entry);
    this.entry = new Entry();
  }

  reset() {
    this.response = '';
  }
}
