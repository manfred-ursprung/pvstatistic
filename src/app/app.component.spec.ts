import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DatainputComponent} from './datainput/datainput.component';
import {DataoutputComponent} from './dataoutput/dataoutput.component';
import {RestServiceComponent} from './rest-service/rest-service.component';
import {FormsModule} from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          AppRoutingModule,
          FormsModule
      ],
      declarations: [
        AppComponent,
        DatainputComponent,
        DataoutputComponent,
        RestServiceComponent
      ],
      providers: [
          { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Photovoltaik App'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Photovoltaik App');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Photovoltaik App');
  }));
});
