import { Component, OnInit } from '@angular/core';
import { SearchOperationService } from '../../services/searchOperation.service';

@Component({
  selector: 'app-serch-bar-operations',
  templateUrl: './serch-bar-operations.component.html',
  styleUrls: ['./serch-bar-operations.component.scss']
})
export class SerchBarOperationsComponent {
  searchValue: string = '';

  constructor(private searchOperationService: SearchOperationService) { }

  onInputChange(event: Event): void {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.searchOperationService.setSearchValue(this.searchValue);
  }
}

