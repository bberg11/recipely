import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() navLinkClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onNavClick(event: Event, slug: string): void {
    event.preventDefault();
    this.navLinkClicked.emit(slug);
  }
}
