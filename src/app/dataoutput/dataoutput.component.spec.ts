import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataoutputComponent } from './dataoutput.component';
import {PventriesService} from '../pventries.service';

describe('DataoutputComponent', () => {
  let component: DataoutputComponent;
  let fixture: ComponentFixture<DataoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataoutputComponent ],
      providers:[
          PventriesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
