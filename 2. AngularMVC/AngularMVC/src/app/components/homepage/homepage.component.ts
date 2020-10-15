import { Component, OnInit } from '@angular/core';

import { PlanetModelService } from 'src/app/services/planet-model.service';

import { FormBuilder, Validators } from '@angular/forms';

import { Planets } from 'src/app/types/planets';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  // this is my controller

  selectedValue: string;

  views = ['Select One', 'list', 'table', 'system', 'all'];

  // model should have data, methods that manipulate the data
  data: Array<Planets>;

  planetForm = this.fb.group({
    selection: [''],
    planetName: ['', Validators.required],
    planetColor: ['', Validators.required],
    planetRadius: ['', Validators.required],
    planetSat: ['', Validators.required],
  });

  constructor(private model: PlanetModelService, private fb: FormBuilder) {
    this.planetForm.controls.selection.setValue('Select One');
    this.data = model.getData();
  }

  ngOnInit(): void {}

  selected() {
    this.selectedValue = this.planetForm.value.selection;
    console.log(this.selectedValue);
  }

  addMyPlanet() {
    // this.data.push({
    //   name: this.planetForm.value.planetName,
    //   color: this.planetForm.value.planetColor,
    //   radius: this.planetForm.value.planetRadius,
    //   satellites: this.planetForm.value.planetSat,
    // });

    this.data = this.model.addData({
      name: this.planetForm.value.planetName,
      color: this.planetForm.value.planetColor,
      radius: this.planetForm.value.planetRadius,
      satellites: this.planetForm.value.planetSat,
    });

    // console.log(this.data);

    this.planetForm.reset();
  }

  getTotalPlanets() {
    return this.model.getTotalPlanets();
  }
}
