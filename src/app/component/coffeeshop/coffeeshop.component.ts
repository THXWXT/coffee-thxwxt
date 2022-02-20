import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from './order';


@Component({
  selector: 'app-coffeeshop',
  templateUrl: './coffeeshop.component.html',
  styleUrls: ['./coffeeshop.component.css']
})
export class CoffeeshopComponent implements OnInit {
  order: Order;
  shopform : FormGroup;

  myDate = Date.now();
  confirm: Boolean = false;
  drink = [
    { id: 1, name: "Cappuccino" },
    { id: 2, name: "Mocha" },
    { id: 3, name: "Late" },
    { id: 4, name: "Espresso" },
  ];

  isshow = false;


  constructor(private form:FormBuilder) {
    this.order = new Order("your name", "example@example", 1234567890, "Coffee", "test", true);
    this.shopform = this.form.group({
      name:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10}')]],
      drink:[null],
      tempPrefer:['',Validators.required],
      sendText:[false],
    });
  }



  ngOnInit(): void {
  }

  submit(){


  }

}
