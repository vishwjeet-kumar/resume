import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() themeMode?:boolean;
  @Output() updatedThemeMode = new EventEmitter<boolean>();
  
  changeThemeColor() {
    this.themeMode = !this.themeMode;
    this.updatedThemeMode.emit(this.themeMode);
  }
}
