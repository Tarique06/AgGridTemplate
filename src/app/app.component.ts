import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from '@ag-grid-community/angular';
import { ColDef, GridOptions, SideBarDef } from '@ag-grid-community/core';
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
      flex: 1,
      enableRowGroup: true,
      enablePivot: true
    },
    {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      filter: 'agNumberColumnFilter',
      resizable: true,
      width: 100,
      enableValue: true,
      aggFunc: 'avg'
    },
    {
      field: 'country',
      headerName: 'Country',
      sortable: true,
      filter: true,
      resizable: true,
      width: 150,
      enableRowGroup: true,
      enablePivot: true
    },
    {
      field: 'department',
      headerName: 'Department',
      sortable: true,
      filter: true,
      resizable: true,
      width: 180,
      enableRowGroup: true,
      enablePivot: true
    },
    {
      field: 'salary',
      headerName: 'Salary',
      sortable: true,
      filter: 'agNumberColumnFilter',
      resizable: true,
      width: 120,
      enableValue: true,
      aggFunc: 'sum',
      valueFormatter: (params) => {
        if (params.value != null) {
          return '$' + params.value.toLocaleString();
        }
        return '';
      }
    }
  ];

  // Sample employee data
  rowData: Employee[] = [
    { id: 1, fullName: 'John Smith', age: 32, country: 'United States', department: 'Engineering', salary: 85000 },
    { id: 2, fullName: 'Sarah Johnson', age: 28, country: 'Canada', department: 'Marketing', salary: 72000 },
    { id: 3, fullName: 'Michael Brown', age: 35, country: 'United Kingdom', department: 'Sales', salary: 78000 },
    { id: 4, fullName: 'Emily Davis', age: 29, country: 'Australia', department: 'Human Resources', salary: 65000 },
    { id: 5, fullName: 'David Wilson', age: 41, country: 'Germany', department: 'Finance', salary: 95000 },
    { id: 6, fullName: 'Lisa Anderson', age: 33, country: 'France', department: 'Engineering', salary: 88000 },
    { id: 7, fullName: 'Robert Taylor', age: 37, country: 'United States', department: 'Operations', salary: 82000 },
    { id: 8, fullName: 'Jennifer Martinez', age: 26, country: 'Spain', department: 'Marketing', salary: 68000 },
    { id: 9, fullName: 'Christopher Lee', age: 39, country: 'Japan', department: 'Engineering', salary: 92000 },
    { id: 10, fullName: 'Amanda White', age: 31, country: 'Canada', department: 'Sales', salary: 75000 }
  ];

  // Sidebar configuration
  sideBar: SideBarDef = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: false,
          suppressValues: false,
          suppressPivots: false,
          suppressPivotMode: false,
          suppressColumnFilter: false,
          suppressColumnSelectAll: false,
          suppressColumnExpandAll: false
        }
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel'
      }
    ],
    defaultToolPanel: 'columns'
  };

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
    suppressPaginationPanel: true,
    pivotMode: false,
    enableRangeSelection: true,
    enableCharts: true
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
