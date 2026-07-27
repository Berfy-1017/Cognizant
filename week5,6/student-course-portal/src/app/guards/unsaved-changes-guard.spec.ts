import { TestBed } from '@angular/core/testing';
import { ReactiveEnrollmentForm } from '../pages/reactive-enrollment-form/reactive-enrollment-form';
import { unsavedChangesGuard } from './unsaved-changes-guard';

describe('unsavedChangesGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(unsavedChangesGuard).toBeTruthy();
  });

  it('should allow deactivation when form is clean', () => {

    const component = {
      enrollForm: {
        dirty: false
      }
    } as unknown as ReactiveEnrollmentForm;

    const result = TestBed.runInInjectionContext(() =>
      unsavedChangesGuard(component, {} as any, {} as any, {} as any)
    );

    expect(result).toBeTrue();

  });

});