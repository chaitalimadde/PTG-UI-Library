import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { DialogExampleComponent } from './dialog-example.component';

describe('DialogExampleComponent', () => {
  let component: DialogExampleComponent;
  let fixture: ComponentFixture<DialogExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot(), BrowserAnimationsModule],
      declarations: [ DialogExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
