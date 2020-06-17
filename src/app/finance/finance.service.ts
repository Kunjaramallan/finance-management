import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  public customersList: any = [
    {
      'id' : 120,
      'username' : 'RSP34',
      'status' : 'Monthly Charge',
      'ac_no' : '3412434343345',
      'invest_amount' : '30,000'
    },
    {
      'id' : 121,
      'username' : 'RSP35',
      'status' : 'Monthly Charge',
      'ac_no' : '3412434343300',
      'invest_amount' : '10,000'
    },
    {
      'id' : 122,
      'username' : 'RSP36',
      'status' : 'Monthly Charge',
      'ac_no' : '3412434343395',
      'invest_amount' : '20,000'
    },
    {
      'id' : 123,
      'username' : 'RSP37',
      'status' : 'Monthly Charge',
      'ac_no' : '3412434343378',
      'invest_amount' : '80,000'
    },
    {
      'id' : 124,
      'username' : 'RSP38',
      'status' : 'Yearly Charge',
      'ac_no' : '3412434341345',
      'invest_amount' : '110,000'
    },
    {
      'id' : 125,
      'username' : 'RSP39',
      'status' : 'Weekly Charge',
      'ac_no' : '3412414343345',
      'invest_amount' : '1,000'
    },
    {
      'id' : 126,
      'username' : 'RSP40',
      'status' : 'Monthly Charge',
      'ac_no' : '3412434043345',
      'invest_amount' : '70,000'
    },
    {
      'id' : 127,
      'username' : 'RSP41',
      'status' : 'Monthly Charge',
      'ac_no' : '3412404343345',
      'invest_amount' : '20,000'
    }
  ];

  // constructor(public httpClient: HttpClient) { }

  // getCustomers(){
  //   this.httpClient.get('https://json.com/customers');
  // }

  // updateAccountNumber(data){
  //   this.httpClient.post('https://json.com/customers', data);
  // }

}
