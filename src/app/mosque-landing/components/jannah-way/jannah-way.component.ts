import { Component } from '@angular/core';

@Component({
  selector: 'app-jannah-way',
  templateUrl: './jannah-way.component.html',
  styleUrls: ['./jannah-way.component.scss']
})
export class JannahWayComponent {

  jannah: number[] = Array.from({ length: 8 }, (_, i) => i + 1);
}
