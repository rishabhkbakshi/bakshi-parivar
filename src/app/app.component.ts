import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import bakshiParivar from './bakshi-parivar-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: TreeNode[] = [];

  ngOnInit(): void {
    this.data = this.convertBakshiToOrgChart(bakshiParivar);
  }

  private convertBakshiToOrgChart(root: any): TreeNode[] {
    if (!root) return [];
    const roots = Array.isArray(root) ? root : [root];
    return roots.map((ancestor: any) => this.convertToOrgChartNode(ancestor));
  }

  private convertToOrgChartNode(node: any): TreeNode {
    const nodeData = node && node.data ? node.data : {};
    const children = Array.isArray(node.children)
      ? node.children.map((child: any) => this.convertToOrgChartNode(child))
      : [];

    // build members array (main person first, then spouse if provided)
    const members: any[] = [];
    if (nodeData.name) {
      members.push({
        name: nodeData.name,
        image: nodeData.image || 'assets/images/default.jpg',
        spouse: nodeData.spouse || undefined
      });
    }
    if (nodeData.spouse && members.length === 0) {
      // if node only represents a spouse-like record (rare), ensure a member exists
      members.push({
        name: nodeData.spouse,
        image: nodeData.spouseImage || 'assets/images/default.jpg'
      });
    }

    // infer type: prefer explicit node.type, otherwise leaf nodes => person, else family
    const nodeType = node && node.type
      ? node.type
      : (children.length === 0 ? 'person' : 'family');

    return {
      type: nodeType === 'person' ? 'person' : 'family',
      data: { members },
      expanded: !!node.expanded,
      children
    } as TreeNode;
  }

  // helper: find siblings (optional)
  public getSiblingsByName(name: string): string[] | null {
    return this.findSiblings(name, this.data);
  }

  private findSiblings(name: string, nodes: any[]): string[] | null {
    if (!Array.isArray(nodes)) return null;
    for (const node of nodes) {
      if (Array.isArray(node.children) && node.children.length > 0) {
        const idx = node.children.findIndex((c: any) => {
          const candidate =
            c.data?.name ||
            (Array.isArray(c.data?.members) && c.data.members[0]?.name) ||
            null;
          return candidate === name;
        });
        if (idx !== -1) {
          return node.children
            .map((c: any) => c.data?.name ?? (Array.isArray(c.data?.members) ? c.data.members[0]?.name : undefined))
            .filter(Boolean);
        }
        const deeper = this.findSiblings(name, node.children);
        if (deeper) return deeper;
      }
    }
    return null;
  }
}