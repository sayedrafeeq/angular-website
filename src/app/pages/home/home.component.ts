import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
