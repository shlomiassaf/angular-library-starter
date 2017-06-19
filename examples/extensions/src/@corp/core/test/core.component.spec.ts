import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';



import { CoreComponent } from '@corp/core/src/core.component';
import { CoreService } from '@corp/core';


describe(`CoreComponent`, () => {
  let comp: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  /**
   * async beforeEach.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ CoreService ]
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
    fixture = TestBed.createComponent(CoreComponent);
    comp = fixture.componentInstance;

    /**
     * Trigger initial data binding.
     */
    fixture.detectChanges();
  });

  it('should have CoreService injected', () => {
    expect(comp.coreService instanceof CoreService).toBe(true);
  });

});