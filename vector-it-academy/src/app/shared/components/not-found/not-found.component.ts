import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'not-found',
  standalone: true,
  styleUrls: ['./not-found.component.scss'],
  imports: [RouterLink],
  template: `
    <h1>404 Error</h1>
    <p class="zoom-area"><b>Kechirasiz:</b> Tizimda hatolik ketgan.</p>
    <section class="error-container">
      <span class="four"><span class="screen-reader-text">4</span></span>
      <span class="zero"><span class="screen-reader-text">0</span></span>
      <span class="four"><span class="screen-reader-text">4</span></span>
    </section>
    <div class="link-container">
      <a target="_blank" [routerLink]="['/students']" class="more-link">Ortga qaytish</a>
    </div>
  `,
})
export class NotFoundComponent implements OnInit {
  ngOnInit() {}
}
