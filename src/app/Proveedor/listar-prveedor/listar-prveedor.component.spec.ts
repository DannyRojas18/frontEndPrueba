import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPrveedorComponent } from './listar-prveedor.component';

describe('ListarPrveedorComponent', () => {
  let component: ListarPrveedorComponent;
  let fixture: ComponentFixture<ListarPrveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPrveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPrveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
