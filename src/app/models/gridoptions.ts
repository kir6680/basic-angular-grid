export class GridOptions
{
  constructor(filter: string, pagenumber: number, pagesize: number, sortcolumn: string, sortdirection:string, totalresult: number) {
    
    this.filter = filter;
    this.pagenumber = pagenumber;
    this.pagesize = pagesize;
    this.sortcolumn = sortcolumn;
    this.sortdirection = sortdirection;
    this.totalresult = totalresult;
  }
  filter: string;
  pagenumber: number;
  pagesize: number;
  sortcolumn: string;
  sortdirection: string;
  totalresult: number;
}
