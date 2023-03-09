import { Component , Input, ViewChild} from '@angular/core';
import { BasicService} from './basic.service';
import { BasicComponent} from './basic.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-overview';
  isClass = false;
  count = 100

  @ViewChild(BasicComponent)  basicComp: any;
  constructor(private bService: BasicService) {
    this.bService.basicSubject.subscribe(() => {
      alert('subscribe');
    })
  }
  onChildClick() {
    this.title = 'child component click';
  }

  onClick() {
    this.basicComp.onCLick();
    this.isClass = true;
  }
}

