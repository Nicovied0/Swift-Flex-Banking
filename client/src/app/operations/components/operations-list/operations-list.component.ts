import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../services/operations.service';
import { SearchOperationService } from '../../services/searchOperation.service';

@Component({
  selector: 'app-operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.scss']
})
export class OperationsListComponent implements OnInit {
  operations: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 7;
  mediaWith: boolean = false;
  operationsLengt: any = 0;
  isLoading: boolean = false;
  searchConcept: any = '';
  hasOperations: boolean = true; // Inicialmente suponemos que hay operaciones


  constructor(
    private operationsService: OperationsService,
    private searchOperationService: SearchOperationService
  ) { }

  ngOnInit() {
    this.getOperation();
    this.getInput()
  }

  getOperation() {
    this.operationsService.getOperations().subscribe(
      res => {
        this.operations = res;
        this.operationsLengt = res.length;
        this.hasOperations = this.operations.length > 0;
      }
    );
  }

  isCompletedState(state: string): boolean {
    return state === 'Completado';
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getCurrentPageOperations(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    return this.operations.slice(startIndex, endIndex);
  }

  getRangeStart(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getRangeEnd(): number {
    const currentRangeEnd = this.currentPage * this.itemsPerPage;
    return currentRangeEnd > this.operations.length ? this.operations.length : currentRangeEnd;
  }

  getLastPage(): number {
    return Math.ceil(this.operations.length / this.itemsPerPage);
  }

  getAllOperations() {
    if (window.innerWidth < 950) {
      this.mediaWith = true;
    } else {
      this.mediaWith = false;
    }
  }

  filterOperations(): void {
    if (this.searchConcept) {
      this.operations = this.operations.filter(operation =>
        operation.concept.toLowerCase().includes(this.searchConcept.toLowerCase())

      );

    } else {
      this.getOperation();
    }
  }

  getInput() {
    this.searchOperationService.searchValue$.subscribe(
      (searchValue: string) => {
        this.searchConcept = searchValue;
        this.filterOperations();
        this.hasOperations = this.operations.length > 0;
        this.currentPage = 1
      },
      (error: any) => {
        console.error('Error al obtener el valor de búsqueda:', error);
      }
    );
  }
}
