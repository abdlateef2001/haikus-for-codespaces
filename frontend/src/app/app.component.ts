import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HaikusService } from './haikus.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Haikus</h1>
    <ul>
      <li *ngFor="let haiku of haikus">
        <pre>{{ haiku.text }}</pre>
        <img *ngIf="haiku.image" [src]="haiku.image" alt="Haiku image" width="200">
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  haikus: any[] = [];

  constructor(private haikusService: HaikusService) {}

  ngOnInit() {
    this.haikusService.getHaikus().subscribe(data => {
      this.haikus = data;
    });
  }
}
