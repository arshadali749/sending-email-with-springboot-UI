import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';


@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailMessageReq = {
    "to": '',
    "subject": '',
    "message": ''
  }

  constructor(private snack: MatSnackBar, private emailService: EmailService) { }

  ngOnInit(): void {
  }

  sendEmail() {
    console.log("EMAIL MESSAGE REQUEST: " + this.emailMessageReq);
    if (this.emailMessageReq.to == "" || this.emailMessageReq.to == null) {
      alert("please add the reciepent .");
      return;
    }
    this.emailService.sendEmail(this.emailMessageReq).subscribe(
      
      response => {
        alert("Response:"+response);
        this.snack.open("Email Sent successfully !!")
      },
      error => {
        alert("ERROR:"+error);
        this.snack.open("something went wrong  !!")
      }
    )


    alert("Form submitted");
  }
}
