import { Component, OnInit } from '@angular/core';
import { GridColumn } from './models/gridcolumns';
import { GridOptions } from './models/gridoptions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string ="Basic grid sample";
  data: any[];
  gridrecordcountoptions: number[] = [10, 25, 50, 100];
  gridoptions: GridOptions;
  columns: GridColumn[];


ngOnInit() {
    this.columns = [
      { displayname: 'Name', columnname: 'name', sortenabled: true, isidentity: true, width: 16 },
      { displayname: 'Age', columnname: 'age', sortenabled: true, isidentity: false, width: 8 },
      { displayname: 'City', columnname: 'city', sortenabled: false, isidentity: false, width: 8 },
      { displayname: 'Designation', columnname: 'designation', sortenabled: false, isidentity: false, width: 12 },
];


 this.gridoptions = {
      filter: '',
      pagesize: 10,
      pagenumber: 1,
      sortcolumn: 'name',
      sortdirection: 'ASC',
      totalresult: 0
    }
   this.getData();
}
getData()
{
  this.data =
[
  {name:'Kirtan1', age:30, city:'Delhi', designation:'Manager'},
  {name:'Ajay2', age:27, city:'Bangalore', designation:'Senior Developer'},
  {name:'Mani3', age:25, city:'Hydrabad', designation:'Senor QA'},
  {name:'Tyler4', age:32, city:'London', designation:'People Manager'},
  {name:'Vish5', age:29, city:'New York', designation:'Coordinator'},
  {name:'Kirtan6', age:30, city:'Delhi', designation:'Manager'},
  {name:'Ajay7', age:27, city:'Bangalore', designation:'Senior Developer'},
  {name:'Mani8', age:25, city:'Hydrabad', designation:'Senor QA'},
  {name:'Tyler9', age:32, city:'London', designation:'People Manager'},
  {name:'Vish10', age:29, city:'New York', designation:'Coordinator'},
  {name:'Kirtan11', age:30, city:'Delhi', designation:'Manager'},
  {name:'Ajay12', age:27, city:'Bangalore', designation:'Senior Developer'},
  {name:'Mani13', age:25, city:'Hydrabad', designation:'Senor QA'},
  {name:'Tyler14', age:32, city:'London', designation:'People Manager'},
  {name:'Vish15', age:29, city:'New York', designation:'Coordinator'},
  {name:'Kirtan16', age:30, city:'Delhi', designation:'Manager'},
  {name:'Ajay17', age:27, city:'Bangalore', designation:'Senior Developer'},
  {name:'Mani18', age:25, city:'Hydrabad', designation:'Senor QA'},
  {name:'Tyler19', age:32, city:'London', designation:'People Manager'},
  {name:'Vish20', age:29, city:'New York', designation:'Coordinator'}];

if(this.gridoptions.filter != null && this.gridoptions.filter != '' && this.gridoptions.filter  != undefined)
{
  this.data = this.data.filter(x => x['name'].toUpperCase().indexOf(this.gridoptions.filter.toUpperCase()) !== -1);
}
this.gridoptions.totalresult = this.data.length;

this.data = this.data.sort((x,y) => {
  if(this.gridoptions.sortdirection == 'desc' || this.gridoptions.sortdirection == 'DESC')
  {
  if(x[this.gridoptions.sortcolumn] > y[this.gridoptions.sortcolumn])
{
  return 1;
}
else if (x[this.gridoptions.sortcolumn] < y[this.gridoptions.sortcolumn])
{
  return -1;
}

  return 0;
}
else
{
if(this.gridoptions.sortdirection == 'desc' || this.gridoptions.sortdirection == 'DESC')
  {
  if(x[this.gridoptions.sortcolumn] < y[this.gridoptions.sortcolumn])
{
  return 1;
}
else if (x[this.gridoptions.sortcolumn] > y[this.gridoptions.sortcolumn])
{
  return -1;
}

  return 0;
}
}
});

this.data = this.data.splice((this.gridoptions.pagenumber-1)*this.gridoptions.pagesize, this.gridoptions.pagesize);
}

pageSizeChanged(pageSize: number) {
    this.gridoptions.pagesize = pageSize;
    this.getData();
  }

  pageChanged(pageNumber: number) {
    this.gridoptions.pagenumber = pageNumber;
    this.getData();
  }
  filterChanged(filter: string) {
    this.gridoptions.filter = filter;
    this.gridoptions.pagenumber = 1;
    this.getData();
  }

  sortChanged(sortInfo: any) {
    this.gridoptions.pagenumber = 1;
    this.gridoptions.sortcolumn = sortInfo.columnname;
    this.gridoptions.sortdirection = sortInfo.sortdirection;
    this.getData();
  }

  userNameClicked(username: any) {
    console.log(username);
  }
}
