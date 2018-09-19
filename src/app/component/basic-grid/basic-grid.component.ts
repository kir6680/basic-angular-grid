import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { GridColumn } from '../../models/gridcolumns';
import { GridOptions } from '../../models/gridoptions';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-data-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.css']
})
export class BasicGridComponent implements OnInit {

  @Input() filterenabled: boolean = true;
  // grid filter textbox place holder text.
  @Input() filterplaceholder: string = 'Type to search.';
  // grid data for filter and paginator.
  @Input() griddata: any[] = [{}];
  // grid column definition.
  @Input() gridcolumns: GridColumn[] =[];
  // Grid options.
  @Input() gridoptions: GridOptions;
  // Record size options.
  @Input() gridrecordcountoptions: number[] = [10, 25, 50, 100];

  // Grid events
  @Output() pageSizeChangedEvent = new EventEmitter<number>();
  @Output() pageChangedEvent = new EventEmitter<number>();
  @Output() filterChangedEvent = new EventEmitter<string>();
  @Output() sortChangedEvent = new EventEmitter<any>();
  @Output() identityColumnClickEvent = new EventEmitter<string>();
  // Current grid record values.
  startOfrecords: number = 0;
  endOfRecords: number = 0;

  constructor() { }

  ngOnInit() {
    // initialize data
    
  }

  pageSizeChanged(pageSize: number) {
    if (pageSize != this.gridoptions.pagesize) {
      this.pageSizeChangedEvent.emit(pageSize);
    }
  }

  pageChanged(pageNumber: number) {
    if (pageNumber != this.gridoptions.pagenumber) {
      this.pageChangedEvent.emit(pageNumber);
    }
  }

  identityColumnClick(id: any) {
    this.identityColumnClickEvent.emit(id);
  }

  getStyle(value: any) {
    return value + '%';
  }

  searchFilter(filter: string) {   
      this.filterChangedEvent.emit(filter);
    
  }

  sort(columnname: string, sortdirection: string) {
    this.sortChangedEvent.emit({ columnname: columnname, sortdirection: sortdirection });
  }

  getRecordCountValues() {


    this.startOfrecords = this.gridoptions.totalresult > 0 ? ((this.gridoptions.pagenumber -1)* this.gridoptions.pagesize) + 1 : 0;

    if (this.gridoptions.pagenumber * this.gridoptions.pagesize < this.gridoptions.totalresult) {
      this.endOfRecords = this.gridoptions.pagenumber * this.gridoptions.pagesize;
    }
    else {
      this.endOfRecords = this.gridoptions.totalresult;
    }    
  }


  ngOnChanges(changes: SimpleChanges) {
    this.getRecordCountValues();
  }

}
