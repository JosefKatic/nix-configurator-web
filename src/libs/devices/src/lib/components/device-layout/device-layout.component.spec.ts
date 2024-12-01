import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceLayoutComponent } from './device-layout.component';

describe('DevicesLayoutComponent', () => {
  let component: DeviceLayoutComponent;
  let fixture: ComponentFixture<DeviceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
