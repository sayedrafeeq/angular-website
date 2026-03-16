import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {}
