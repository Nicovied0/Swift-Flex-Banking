import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../services/operatios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {
  constructor(private operationsService: OperationsService, private router: Router) { }

  lastOperations: any = null

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations() {
    this.operationsService.getOperations().subscribe(
      response => {
        this.lastOperations = response
      })
  }
  goOperations() {
    this.router.navigate(['operations'])
  }
}
