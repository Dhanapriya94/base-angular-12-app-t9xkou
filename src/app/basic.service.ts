import { Injectable } from '@angular/core';
import { Observer, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BasicService {
  constructor(private http: HttpClient) {
     
  }
  basicSubject = new Subject<any>();
}