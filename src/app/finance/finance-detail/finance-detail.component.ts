import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AccountModalComponent } from '../account-modal/account-modal.component';

@Component({
  selector: 'app-finance-detail',
  templateUrl: './finance-detail.component.html',
  styleUrls: ['./finance-detail.component.scss']
})
export class FinanceDetailComponent implements OnInit {

  customerDetail = {
    'id' : 126,
    'username' : 'RSP40',
    'status' : 'Monthly Charge',
    'ac_no' : '3412434043345',
    'invest_amount' : '70,000'
  };

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(AccountModalComponent,  {
      initialState: {
        title: 'Change Account Number',
        data: this.customerDetail
      }
    });
  }

  // saveAccountNumber() {
  //   this.financeService.updateAccountNumber(this.customerDetail));
  // }

  ngOnInit(): void {
  }

}
