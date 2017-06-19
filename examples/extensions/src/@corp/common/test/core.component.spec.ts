import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';



import { CommonComponent } from '@corp/common/src/common.component';
import { CommonService } from '@corp/common';


describe(`CommonComponent`, () => {
  let comp: CommonComponent;
  let fixture: ComponentFixture<CommonComponent>;

  /**
   * async beforeEach.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ CommonService ]
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
    fixture = TestBed.createComponent(CommonComponent);
    comp = fixture.componentInstance;

    /**
     * Trigger initial data binding.
     */
    fixture.detectChanges();
  });

  it('should have CommonService injected', () => {
    expect(comp.commonService instanceof CommonService).toBe(true);
  });

});