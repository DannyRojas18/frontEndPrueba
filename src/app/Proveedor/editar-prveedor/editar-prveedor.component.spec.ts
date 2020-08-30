import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPrveedorComponent } from './editar-prveedor.component';

describe('EditarPrveedorComponent', () => {
  let component: EditarPrveedorComponent;
  let fixture: ComponentFixture<EditarPrveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPrveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPrveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
