import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-family-node',
  templateUrl: './family-node.component.html',
  styleUrls: ['./family-node.component.scss']
})
export class FamilyNodeComponent implements OnInit, AfterViewInit {
  @Input() member: any;

  @ViewChild('nodeWrapper', { static: false }) nodeWrapper!: ElementRef;
  @ViewChild('nodeCard', { static: false }) nodeCard!: ElementRef;

  hovered = false;
  previewSrc = '';
  previewPosition: '' | 'left' | 'right' = '';
  previewStyles: { [key: string]: string } = {};

  ngOnInit(): void {
    this.previewSrc = this.member?.image || '/assets/images/default.png';
    if (this.previewSrc) {
      const img = new Image();
      img.src = this.previewSrc;
    }
  }

  ngAfterViewInit(): void {
    // no-op for now; ViewChild refs available after view init
  }

  showPreview(): void {
    // compute where to place the preview: default above (''), or 'left'/'right'
    try {
      const wrapperEl = this.nodeWrapper?.nativeElement as HTMLElement;
      const cardEl = this.nodeCard?.nativeElement as HTMLElement;
      if (wrapperEl && cardEl && typeof window !== 'undefined') {
        const wrapperRect = wrapperEl.getBoundingClientRect();
        const rect = cardEl.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const previewMaxW = Math.min(520, vw - 40);
        const previewMaxH = Math.min(520, vh - 40);

        const spaceAbove = rect.top;
        // default placement above
        let position: '' | 'left' | 'right' = '';

        if (spaceAbove < previewMaxH + 20) {
          // not enough space above -> prefer right unless not enough horizontal space
          if (rect.right + previewMaxW + 12 > vw) {
            position = 'left';
          } else {
            position = 'right';
          }
        }

        this.previewPosition = position;

        // Compute inline styles relative to wrapper so preview is visually attached to node
        const styles: any = { position: 'absolute' };

        if (position === '') {
          // above: center horizontally relative to node-card
          const desiredWidth = previewMaxW;
          let left = rect.left - wrapperRect.left + rect.width / 2 - desiredWidth / 2;
          // clamp
          left = Math.max(10, Math.min(left, wrapperRect.width - desiredWidth - 10));
          const top = rect.top - wrapperRect.top - previewMaxH - 12;
          styles.left = `${left}px`;
          styles.top = `${Math.max(8, top)}px`;
          styles.width = `${desiredWidth}px`;
          styles.transform = 'none';
        } else if (position === 'right') {
          // place to right, vertically centered to node-card
          const desiredWidth = previewMaxW;
          const left = rect.right - wrapperRect.left + 12;
          const topCenter = rect.top - wrapperRect.top + rect.height / 2;
          styles.left = `${Math.min(left, wrapperRect.width - 10)}px`;
          styles.top = `${topCenter}px`;
          styles.transform = 'translateY(-50%)';
          styles.width = `${desiredWidth}px`;
        } else {
          // left
          const desiredWidth = previewMaxW;
          let left = rect.left - wrapperRect.left - desiredWidth - 12;
          left = Math.max(10, left);
          const topCenter = rect.top - wrapperRect.top + rect.height / 2;
          styles.left = `${left}px`;
          styles.top = `${topCenter}px`;
          styles.transform = 'translateY(-50%)';
          styles.width = `${desiredWidth}px`;
        }

        this.previewStyles = styles;
      }
    } catch (e) {
      this.previewPosition = '';
      this.previewStyles = {};
    }

    this.hovered = true;
  }

  hidePreview(): void {
    this.hovered = false;
  }
}
