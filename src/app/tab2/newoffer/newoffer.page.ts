import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CruiseService } from 'src/app/tab1/cruise.service';

@Component({
  selector: 'app-newoffer',
  templateUrl: './newoffer.page.html',
  styleUrls: ['./newoffer.page.scss'],
})
export class NewofferPage implements OnInit {
  form: FormGroup;
  constructor(
    private cruiseService: CruiseService,
    private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      startDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      endDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
  onCreateOffer() {
    console.log(this.form);
    this.cruiseService.addCruise(
      this.form.value.title,
      this.form.value.description,
      this.form.value.price,
      new Date(this.form.value.startDate),
      new Date(this.form.value.endDate)
    );
    this.form.reset();
    this.router.navigate(['/tabs/tab1']);
  }
}
