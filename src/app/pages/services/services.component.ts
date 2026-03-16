import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './services.html',
  styleUrl: './services.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {}
