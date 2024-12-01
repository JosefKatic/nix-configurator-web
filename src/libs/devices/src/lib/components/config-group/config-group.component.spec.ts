import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigGroupComponent } from './config-group.component';

describe('ConfigGroupComponent', () => {
  let component: ConfigGroupComponent;
  let fixture: ComponentFixture<ConfigGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
