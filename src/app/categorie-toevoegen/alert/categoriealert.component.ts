import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-categorie-alert',
  templateUrl: './categoriealert.component.html',
  styleUrls: ['./categoriealert.component.css']
})
export class CategorieAlertComponent {
  @Input() message: string = "";
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit()
  }

}
