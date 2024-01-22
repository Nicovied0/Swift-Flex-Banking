import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 7;
  @Input() totalItems: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  getRangeStart(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getRangeEnd(): number {
    const currentRangeEnd = this.currentPage * this.itemsPerPage;
    return currentRangeEnd > this.totalItems ? this.totalItems : currentRangeEnd;
  }

  getLastPage(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.getLastPage()) {
      this.pageChange.emit(pageNumber);
    }
  }

  changePage(change: number): void {
    const newPage = this.currentPage + change;
    this.goToPage(newPage);
  }

  getPageNumbers(): number[] {
    const lastPage = this.getLastPage();
    return Array.from({ length: lastPage }, (_, index) => index + 1);
  }
}
