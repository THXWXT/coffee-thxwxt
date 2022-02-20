import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Friend } from './friend';
@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  friend : Friend;
  friendForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.friend = new Friend("thxwxt","thxwxt@jmail",20);
    this.friendForm = this.fb.group({
      FriendName:[''],
      FriendEmail:[''],
      FriendAge:['']
    });
  }
  testname : string ="";
  ngOnInit(): void {}
  changeDefaultName(str:string){
    this.friend.name = str;
  }
  submitalldata(name:string , email:string , age:number){
    this.friend.name = name;
    this.friend.email = email;
    this.friend.age = age;
  }
  testtest(){
    this.testname = this.friend.name;
  }

}
