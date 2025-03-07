import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AddClientModalComponent } from './add-client-modal/add-client-modal.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';

interface Client {
  idNumber: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  location: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  standalone: true,
  imports: [MenuModule, SplitButtonModule, TableModule, DialogModule, RippleModule, SelectModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, TextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule, IconFieldModule, InputIconModule, ButtonModule, AddClientModalComponent],
  providers: [ConfirmationService, MessageService]
})
export class ClientsComponent {
  clients: Client[] = [
    { idNumber: '1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Active', location: 'New York' },
    { idNumber: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', status: 'Inactive', location: 'Los Angeles' },
    { idNumber: '3', name: 'Alice Johnson', email: 'alice@example.com', phone: '555-123-4567', status: 'Active', location: 'Chicago' },
    { idNumber: '4', name: 'Bob Brown', email: 'bob@example.com', phone: '444-555-6666', status: 'Pending', location: 'Houston' }
  ];

  items: { label: string; items: { label: string; icon: string; command?: () => void; }[]; }[] = [];
  searchText: string = '';

  selectedClients: Client[] = [];
  clientDialog: boolean = false;
  client: Client = { idNumber: '', name: '', email: '', phone: '', status: '', location: '' };
  submitted: boolean = false;
  statuses: any[] = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
    { label: 'Pending', value: 'Pending' }
  ];

  addClientModalVisible: boolean = false;
  display: boolean = false;
  clientForm: FormGroup;

  @ViewChild('dt') dt: Table | undefined;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      status: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Export',
            icon: 'pi pi-upload',
          },
          {
            label: 'Copy Track Link',
            icon: 'pi pi-link',
            command: () => this.copyTrackLinkForSelectedClient()
          }
        ]
      }
    ];
  }

  getMenuItems(client: Client) {
    return [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Export',
            icon: 'pi pi-upload'
          },
          {
            label: 'Copy Track Link',
            icon: 'pi pi-link',
            command: () => this.copyTrackLink(client)
          }
        ]
      }
    ];
  }
  
  copyTrackLink(client: Client) {
    const baseUrl = window.location.origin;
    const trackLink = `${baseUrl}/pages/track/${client.phone}`;
    this.copyToClipboard(trackLink);
    this.showMessage(`Track link copied for ${client.name}`);
  }
  
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.showMessage('Link copied successfully!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
  
  showMessage(detail: string) {
    console.log('detail', detail)
    this.messageService.add({ severity: 'success', summary: 'Success', detail });
  }
  
  

  copyTrackLinkForSelectedClient() {
    
    console.log('123', )
    if (this.selectedClients.length === 1) {
      const client = this.selectedClients[0];
      console.log('client', client)
      const baseUrl = window.location.origin;
      console.log('baseUrl', baseUrl)
      const trackLink = `${baseUrl}/pages/track/${client.phone}`;
      console.log('trackLink', trackLink)
      this.copyToClipboard(trackLink);
      this.showMessage(`Track link copied for ${client.name}`);
    } else {
      this.showMessage("Select a single client to generate a tracking link.");
    }
  }
  

  get filteredClients() {
    return this.clients.filter(client =>
      client.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      client.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
      client.phone.includes(this.searchText) ||
      client.status.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  getSeverity(status: string): "success" | "danger" | "warn" | "secondary" | "contrast" | undefined {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'danger';
      case 'Pending':
        return 'warn';
      default:
        return 'secondary';
    }
  }

  hideDialog() {
    this.clientDialog = false;
    this.submitted = false;
  }

  filterGlobal(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (this.dt) {
      this.dt.filterGlobal(inputElement.value, 'contains');
    }
  }

  saveClient() {
    this.submitted = true;
    if (this.client.name.trim()) {
      if (this.client.idNumber) {
        const index = this.clients.findIndex(c => c.idNumber === this.client.idNumber);
        this.clients[index] = this.client;
      } else {
        this.client.idNumber = this.createId();
        this.clients.push(this.client);
      }
      this.clients = [...this.clients];
      this.clientDialog = false;
      this.client = { idNumber: '', name: '', email: '', phone: '', status: '', location: '' };
    }
  }

  createId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  deleteSelectedClients() {
    this.clients = this.clients.filter(val => !this.selectedClients.includes(val));
    this.selectedClients = [];
  }

  exportCSV(event: any) {
    // Implement export CSV logic here
  }

  editClient(client: Client) {
    // Implement edit client logic here
  }

  deleteClient(client: Client) {
    this.clients = this.clients.filter(c => c.idNumber !== client.idNumber);
  }

  addClient() {
    this.showAddClientModal();
  }

  showAddClientModal() {
    this.addClientModalVisible = true;
  }

  onClientAdded(client: Client) {
    this.clients.push(client);
  }
}