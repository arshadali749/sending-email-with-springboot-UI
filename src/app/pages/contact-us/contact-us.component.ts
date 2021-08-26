import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  btnCLicked()
  {
    console.log("you clicked the button");
    this.snack.open("you clicked button","cancel")
  }
}
