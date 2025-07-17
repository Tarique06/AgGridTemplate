import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from '@ag-grid-community/angular';
import { ColDef, GridOptions } from '@ag-grid-community/core';
import { Employee } from './models/employee.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee Data Grid';

  // Column definitions for AG Grid
  columnDefs: ColDef[] = [
    {
      field: 'fullName',
      headerName: 'Full Name',
      sortable: true,
      filter: true,
      resizable: true,
      minWidth: 200,
      flex: 1
    },
    {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      filter: 'agNumberColumnFilter',
      resizable: true,
      width: 100
    },
    {
      field: 'country',
      headerName: 'Country',
      sortable: true,
      filter: true,
      resizable: true,
      width: 150
    },
    {
      field: 'department',
      headerName: 'Department',
      sortable: true,
      filter: true,
      resizable: true,
      width: 180
    }
  ];

  // Sample employee data
  rowData: Employee[] = [
    { id: 1, fullName: 'John Smith', age: 32, country: 'United States', department: 'Engineering' },
    { id: 2, fullName: 'Sarah Johnson', age: 28, country: 'Canada', department: 'Marketing' },
    { id: 3, fullName: 'Michael Brown', age: 35, country: 'United Kingdom', department: 'Sales' },
    { id: 4, fullName: 'Emily Davis', age: 29, country: 'Australia', department: 'Human Resources' },
    { id: 5, fullName: 'David Wilson', age: 41, country: 'Germany', department: 'Finance' },
    { id: 6, fullName: 'Lisa Anderson', age: 33, country: 'France', department: 'Engineering' },
    { id: 7, fullName: 'Robert Taylor', age: 37, country: 'United States', department: 'Operations' },
    { id: 8, fullName: 'Jennifer Martinez', age: 26, country: 'Spain', department: 'Marketing' },
    { id: 9, fullName: 'Christopher Lee', age: 39, country: 'Japan', department: 'Engineering' },
    { id: 10, fullName: 'Amanda White', age: 31, country: 'Canada', department: 'Sales' }
  ];

  // Default column definitions
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };

  // Grid options
  gridOptions: GridOptions = {
    animateRows: true,
    rowSelection: 'single',
    suppressPaginationPanel: true
  };

  constructor() {}

  ngOnInit(): void {
  }

  // Grid event handlers
  onGridReady(params: any): void {
    params.api.sizeColumnsToFit();
  }

  onRowSelected(event: any): void {
    if (event.node.selected) {
      console.log('Selected employee:', event.data);
    }
  }

  onCellClicked(event: any): void {
    console.log('Cell clicked:', event.colDef.field, '=', event.value);
  }
}
