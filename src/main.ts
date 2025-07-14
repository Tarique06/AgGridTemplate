import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

// Register AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
