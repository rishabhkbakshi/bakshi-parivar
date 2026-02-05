import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import bakshiParivar from '../data/bakshi-parivar';

interface FamilyMember {
  name: string;
  spouse?: string;
  children?: FamilyMember[];
}

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent {
  treeControl = new NestedTreeControl<FamilyMember>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FamilyMember>();

  constructor() {
    // You can directly assign ancestors for the tree data source
    this.dataSource.data = bakshiParivar.ancestors;
  }

  hasChild = (_: number, node: FamilyMember) => !!node.children && node.children.length > 0;
}