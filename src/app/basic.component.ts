import { Component,Input, Output, EventEmitter, } from '@angular/core';
import { BasicService} from './basic.service';

@Component({
  selector: 'basic-component',
  templateUrl: './basic.component.html',
  styleUrls: ['basic.component.css']
})

export class BasicComponent {
  @Input('input') title: any;
  @Output() childClick=new EventEmitter<any>();

  constructor(private bService: BasicService) {

  }
  onCLick() {
    alert('self')
    // this.childClick.emit();
    // this.bService.basicSubject.next();
  }
}