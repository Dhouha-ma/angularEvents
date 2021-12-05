import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/user/auth.service';
import { DurationPipe } from '../shared/duration.pipe';
import { SessionlistComponent } from './session-list.component';
import { VoterService } from './voter.service';

describe('SessionListCompoenent', () => {
  let mockAuthService,
    mockVoterService,
    fixture: ComponentFixture<SessionlistComponent>,
    component: SessionlistComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(() => {
    mockAuthService = {
      isAuthenticated: () => true,
      currentuser: { userName: 'Joe' },
    };
    mockVoterService = { userHasVoted: () => true };

    TestBed.configureTestingModule({
      declarations: [
        SessionlistComponent,
        DurationPipe
      ],
      providers: [
        { provide: AuthService, userValue: mockAuthService },
        { provide: VoterService, userValue: mockVoterService },
        HttpClient,
        HttpHandler,
      ],
      schemas: [
          NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(SessionlistComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('Initial display', () => {
    it('should have the correct title', () => {
      component.sessions = [
        {
          name: 'Session 1',
          id: 3,
          presenter: 'Joe',
          duration: '1',
          level: 'beginner',
          abstract: 'abstract',
          voters: ['John', 'Bob'],
        },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;
      component.ngOnChanges();

      fixture.detectChanges();

      //expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
      expect(
        debugEl.query(By.css('[well-title]')).nativeElement.textContent
      ).toContain('Session 1');
    });
  });
});
