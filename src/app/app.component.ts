import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sourceSubject = new Subject();
  behaviorSubject = new BehaviorSubject<string>('');
  replaySubjectSource = new ReplaySubject(1);

  ngOnInit(): void {
    this.handleReplaySubject();
    // this.handleSubject();
    // this.handleBehaviorSubject();
  }

  private handleReplaySubject() {
    this.replaySubjectSource.next('a value');
    this.replaySubjectSource.next('b value');
    this.replaySubjectSource.next('c value');
    this.replaySubjectSource.subscribe((it) => console.warn('obs-1' + it));
    this.replaySubjectSource.subscribe((it) => console.warn('obs-2' + it));
  }

  private handleBehaviorSubject() {
    this.behaviorSubject.next('a value');
    this.behaviorSubject.next('b value');
    this.behaviorSubject.subscribe((it) => console.warn('obs-1:' + it));
    this.behaviorSubject.subscribe((it) => console.warn('obs-2:' + it));
  }

  private handleSubject() {
    this.sourceSubject.subscribe((it) => console.warn('obs-1' + it));
    this.sourceSubject.subscribe((it) => console.warn('obs-2' + it));

    this.sourceSubject.next('a value');
  }
}
