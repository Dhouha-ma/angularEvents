import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
  templateUrl: './session-list.component.html',
  selector: 'session-list',
})
export class SessionlistComponent implements OnChanges{
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[] = []

  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy)
    }
  }

  filterSessions(filter){
    if (filter ==='all'){
      this.visibleSessions = this.sessions.slice( 0)
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter
      })
    }
  }
}
