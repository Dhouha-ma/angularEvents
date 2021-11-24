import { Component, Input } from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
  templateUrl: './session-list.component.html',
  selector: 'session-list',
})
export class SessionlistComponent {
  @Input() sessions: ISession[];
}
