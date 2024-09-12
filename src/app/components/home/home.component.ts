import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clientName: string = '';
  clientPhone: string = '';
  clientproduct: string = '';
  clientemail: string = '';
  clientList: string = '';
  selectedOption: string = '';  
  homeInfo: boolean = false;

  onSelectionChange(option: string) {
    this.selectedOption = option;  
  }

  doDelete() {

   
  }
  openModal() {
    const modalElement = document.getElementById('productModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);  
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }
}
