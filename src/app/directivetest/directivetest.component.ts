import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivetest',
  templateUrl: './directivetest.component.html',
  styleUrls: ['./directivetest.component.css']
})
export class DirectivetestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students = [
    {
      name: 'Mickey',
      email: 'Mickey@gmail.com',
      major: 'Cs',
      year: 'Second',
    },
    {
      name: 'Minney',
      email: 'Minney@gmail.com',
      major: 'Cs',
      year: 'THird',
    },
    {
      name: 'duh',
      email: 'duh@gmail.com',
      major: 'SWE',
      year: 'third',
    },
    {
      name: 'huh',
      email: 'huh@gmail.com',
      major: 'SWE',
      year: 'second',
    },
  ];
}
