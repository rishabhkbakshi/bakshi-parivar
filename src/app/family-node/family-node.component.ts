import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-family-node',
  templateUrl: './family-node.component.html',
  styleUrls: ['./family-node.component.scss']
})
export class FamilyNodeComponent {
  @Input() member: any;
}
