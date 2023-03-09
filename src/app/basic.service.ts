import { Injectable } from '@angular/core';
import { Observer, Subject } from 'rxjs';

@Injectable()
export class BasicService {
  basicSubject = new Subject<any>();
}