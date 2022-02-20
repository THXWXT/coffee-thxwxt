import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor(private logger: LogService) { }

  ngOnInit(): void {
  }

  name:string="THX";
  title : string = "Welcome to My E-store";
  isDisabled = true;
  item: string = "item";
  searchItem: string = "";
  numItem = 0;

  searchItems():void{
    this.numItem = 5;
    this.searchItem = this.item;
  }

  greet(): void{
    this.logger.log("Testing greet method");
  }
}


