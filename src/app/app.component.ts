import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  template: `
    <ag-grid-angular
      style="height: 500px; flex-grow: 1;"
      class="ag-theme-material"
      [rowData]="[{
        name: 'name',
        club: 'club'
      }]"
      [gridOptions]="gridOptions"
      [columnDefs]="columnDefs"
    >
    </ag-grid-angular>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clean-ng-project';

  displayedInfo: any[] = [];

  columnDefs: any[] = [
    // { headerName: 'data_id', field: 'data_id' },
    // {
    //   headerCheckboxSelection: true,
    //   checkboxSelection: true,
    //   // hide: !editable,
    //   width: 50,
    //   editable: false,
    //   sortable: false,
    //   filter: false,
    //   resizable: false,
    //   suppressSizeToFit: true,
    //   cellClass: 'ag-grid-no-cell-border',
    // },
    { headerName: 'Name', field: 'name', minWidth: 250,
      valueSetter: (popupAgGridObject) => {
        console.log(popupAgGridObject);
        return true;
      }

    }, // , checkboxSelection: true
    { headerName: 'Club', field: 'club', minWidth: 150, },
  ];


  // See for using helpers.getgetBaseAgGridOptions
  gridOptions: GridOptions<any> = {
    // getRowClass: params => {
    //   // if (this.readonly) return 'ag-grid-force-readonly';
    // },

    // this is a handy way to set defaults onto the columns
    defaultColDef: {
      lockPosition: true, // 20220913: ag-grid 28.1.1 throws an error (Maximum call stack exceeded) when dragging headers from one table to the other
      width: 80,
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
      onCellValueChanged: params => {
        console.log(params);
      },
      filterParams: {
        clearButton: true,
        applyButton: false,
        debounceMs: 200,
      },
      valueSetter: params => {
        // if the new value is the same as the old one just return false
        // so it doesn't trigger onCellValueChanged
        if (params.newValue === params.oldValue) return false;
        // Should set the value only if the cell has a custom editor (in those cases we don't want to interfere with anything) OR
        // if the new value isn't null or undefined -> this for the cell without a custom editor (meaning the normal cells)
        // If a user cleans the field this will return '' so that is still possible
        if (params.colDef.cellEditor || params.newValue != null) {
          params.data[params.colDef.field] = params.newValue;
          return true;
        }
        return false;
      },
    },

    rowSelection: 'multiple',
    // set the top grid to single click editing
    singleClickEdit: true,
    // stopEditingWhenGridLosesFocus: true,
    animateRows: true,
    suppressMenuHide: true,

    rowDragManaged: true,
  };
}
