import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-widget-component',
  templateUrl: './user-widget-component.component.html',
  styleUrls: ['./user-widget-component.component.css']
})
export class UserWidgetComponentComponent implements OnInit {
  public name="Rohit";
  public gmail="rohit@gmail.com";
  public status=true;

  status2(){
    if(this.status)
    {
      return "Active";
    }
    else{
      return "Inactive";
    }
  }
  
  public successClass="success";
  public failedClass="fail";
  
  public Message={
    "success":this.status,
    "fail":!this.status
  }

  constructor() { }

  ngOnInit(): void {
  }

}
