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
import { ConfirmationService } from 'primeng/api';
import { AddDriverModalComponent } from './add-driver-modal/add-driver-modal.component';

interface Driver {
    idNumber: string;
    name: string;
    phone: string;
    baseLocation: string;
}

interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface ExportColumn {
    title: string;
    dataKey: string;
}

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.component.html',
    styleUrls: ['./drivers.component.scss'],
    standalone: true,
    imports: [TableModule, DialogModule, RippleModule, SelectModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, TextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule, IconFieldModule, InputIconModule, ButtonModule, AddDriverModalComponent ],
    providers: [ConfirmationService]
})
export class DriversComponent {
    drivers: Driver[] = [
        { idNumber: '1', name: 'John Doe', phone: '123-456-7890', baseLocation: 'New York' },
        { idNumber: '2', name: 'Jane Smith', phone: '987-654-3210', baseLocation: 'Los Angeles' },
        { idNumber: '3', name: 'Alice Johnson', phone: '555-123-4567', baseLocation: 'Chicago' },
        { idNumber: '4', name: 'Bob Brown', phone: '444-555-6666', baseLocation: 'Houston' }
    ];

    searchText: string = '';

    selectedDrivers: Driver[] = [];
    closeDialog: boolean = false;
    driver: Driver = { idNumber: '', name: '', phone: '', baseLocation: '' };
    submitted: boolean = false;

    addDriverModalVisible: boolean = false;
    display: boolean = false;
    driverForm: FormGroup;

    cols: Column[] = [
        { field: 'idNumber', header: 'ID Number', customExportHeader: 'Driver ID' },
        { field: 'name', header: 'Name' },
        { field: 'phone', header: 'Phone' },
        { field: 'baseLocation', header: 'Base Location' }
    ];

    @ViewChild('dt') dt: Table | undefined;

    exportColumns: ExportColumn[] = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

    rowsPerPageOptions = [5, 10, 20, 50];
    rows = 10;

    constructor(private fb: FormBuilder) {
        this.driverForm = this.fb.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
            baseLocation: ['', Validators.required]
        });
    }

    get filteredDrivers() {
        return this.drivers.filter(driver =>
            driver.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
            driver.phone.includes(this.searchText) ||
            driver.baseLocation.toLowerCase().includes(this.searchText.toLowerCase())
        );
    }

    exportCSV() {
        console.log('this.dt', this.dt?.columns)
        if (this.dt) {
          this.dt.exportCSV();
        } else {
          console.error('Table reference is undefined');
        }
      }

    hideDialog() {
        this.closeDialog = false;
        this.submitted = false;
    }

    filterGlobal(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        if (this.dt) {
            this.dt.filterGlobal(inputElement.value, 'contains');
        }
    }
    

    saveDriver() {
        this.submitted = true;
        if (this.driver.name.trim()) {
            if (this.driver.idNumber) {
                const index = this.drivers.findIndex(d => d.idNumber === this.driver.idNumber);
                this.drivers[index] = this.driver;
            } else {
                this.driver.idNumber = this.createId();
                this.drivers.push(this.driver);
            }
            this.drivers = [...this.drivers];
            this.closeDialog = false;
            this.driver = { idNumber: '', name: '', phone: '', baseLocation: '' };
        }
    }

    createId(): string {
        return Math.random().toString(36).substr(2, 9);
    }

    deleteSelectedDrivers() {
        this.drivers = this.drivers.filter(val => !this.selectedDrivers.includes(val));
        this.selectedDrivers = [];
    }

    editDriver(driver: Driver) {
        // Implement edit driver logic here
    }

    deleteDriver(driver: Driver) {
        this.drivers = this.drivers.filter(d => d.idNumber !== driver.idNumber);
    }

    addDriver() {
        this.showAddDriverModal();
    }

    showAddDriverModal() {
        this.addDriverModalVisible = true;
    }

    onDriverAdded(driver: Driver) {
        this.drivers.push(driver);
    }

    onRowsChange(event: any) {
        this.rows = event.value;
    }
}
