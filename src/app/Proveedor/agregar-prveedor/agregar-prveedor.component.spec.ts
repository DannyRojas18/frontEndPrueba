import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPrveedorComponent } from './agregar-prveedor.component';

describe('AgregarPrveedorComponent', () => {
  let component: AgregarPrveedorComponent;
  let fixture: ComponentFixture<AgregarPrveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPrveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPrveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
