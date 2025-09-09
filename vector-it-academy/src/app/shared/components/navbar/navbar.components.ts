import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatBadgeModule],
})

export class NavbarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}