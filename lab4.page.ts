import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
})
export class Lab4Page implements OnInit {
  title: string = "Check Box Task";
  
public form = [
  {val: 'Pepperoni', pic: 'assets/nugget.jpg', isChecked: true },
  {val: 'Sausage', pic: 'assets/favicon.png', isChecked: false  },
  {val: 'Mushroom', pic: 'assets/nugget.jpg', isChecked: false },
  {val: 'Sausage', pic: 'assets/favicon.png', isChecked: false  },
  {val: 'Mushroom', pic: 'assets/nugget.jpg', isChecked: false },
  {val: 'Sausage', pic: 'assets/favicon.png', isChecked: false  },
  {val: 'Mushroom', pic: 'assets/nugget.jpg', isChecked: false },
];
  constructor() { }

  ngOnInit() {
  }

}
