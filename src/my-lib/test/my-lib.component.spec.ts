import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';



import { MyLibComponent } from 'my-lib/src/my-lib.component';
import { MyLibService } from 'my-lib/src/my-lib.service';


describe(`MyLibComponent`, () => {
  let comp: MyLibComponent;
  let fixture: ComponentFixture<MyLibComponent>;

  /**
   * async beforeEach.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ MyLibService ]
    })
    /**
     * Compile template and css.
     */
      .compileComponents();
  }));

  /**
   * Synchronous beforeEach.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibComponent);
    comp = fixture.componentInstance;

    /**
     * Trigger initial data binding.
     */
    fixture.detectChanges();
  });

  it('should have MyLibService injected', () => {
    expect(comp.myLibService instanceof MyLibService).toBe(true);
  });

});