import { Component, OnInit } from '@angular/core';
import {PventriesService} from '../pventries.service';

@Component({
  selector: 'app-dataoutput',
  templateUrl: './dataoutput.component.html',
  styleUrls: ['./dataoutput.component.css']
})
export class DataoutputComponent implements OnInit {

  list: Array<any>;

  constructor(
      private pventriesService: PventriesService
  ) { }

  ngOnInit() {
    this.list = this.pventriesService.getAll();
  }

}
