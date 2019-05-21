import { Component, OnInit } from '@angular/core';
import { Cruise } from 'src/app/tab1/cruise.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CruiseService } from 'src/app/tab1/cruise.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.page.html',
  styleUrls: ['./editoffer.page.scss'],
})
export class EditofferPage implements OnInit {
  cruise: Cruise;
  id: string;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private cruiseService: CruiseService,
    private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('cruiseId');
    this.cruise = this.cruiseService.getCruise(this.id);
    this.form = new FormGroup({
      title: new FormControl(this.cruise.title, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(this.cruise.description, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
    });
  }
  onEditOffer() {
    console.log(this.form);
    this.cruiseService.updateOffer(
      this.id,
      this.form.value.title,
      this.form.value.description
    );
    this.form.reset();
    this.router.navigate(['/tabs/tab1']);
  }
}
