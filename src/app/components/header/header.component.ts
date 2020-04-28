import { Component } from '@angular/core';
import { DataStorageService } from './../../services/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private router: Router
  ) {}

  onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }

  onGetData(): void {
    this.dataStorageService.getRecipes().subscribe();
    this.router.navigate(['/recipes']);
  }
}
