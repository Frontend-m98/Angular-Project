import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.components";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="p-3">
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class App {
  title = 'vector-it-academy';
}

// &  Core

// ^ 1. Landing page  (Welcome + Course details).
// ^ 2. Sign in -   Sign up.

// ! Students

// * 1. My.courses page.
// * 2. Course details.
// * 3. Join course page (form + payment).
// * 4. owned course page (history, roadmap, links).
