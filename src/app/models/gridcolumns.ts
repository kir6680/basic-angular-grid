export class GridColumn {

  constructor(columnname: string, displayname: string, sortenabled: boolean, isidentity: boolean, width: number) {
 
    this.columnname = columnname;
    this.displayname = displayname;
    this.sortenabled = sortenabled;
    this.isidentity = isidentity;
    this.width = width;
    }

  columnname: string;
  displayname: string;
  sortenabled: boolean;
  isidentity: boolean;
  width: number;
}
