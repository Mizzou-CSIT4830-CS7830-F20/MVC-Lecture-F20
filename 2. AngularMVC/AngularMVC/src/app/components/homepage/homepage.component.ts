import { Component, OnInit } from '@angular/core';

import { PlanetModelService } from 'src/app/services/planet-model.service';

import planets from 'src/assets/planetData.json';
import { Planets } from 'src/app/types/planets';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  selectedValue: string;

  views = ['Select One', 'list', 'table', 'system', 'all'];

  data: Array<Planets> = planets;

  planetForm = this.fb.group({
    selection: [''],
    planetName: ['', Validators.required],
    planetColor: ['', Validators.required],
    planetRadius: ['', Validators.required],
    planetSat: ['', Validators.required],
  });

  constructor(private model: PlanetModelService, private fb: FormBuilder) {
    this.planetForm.controls.selection.setValue('Select One');
  }

  ngOnInit(): void {}

  selected() {
    this.selectedValue = this.planetForm.value.selection;
    console.log(this.selectedValue);
  }

  addMyPlanet() {
    this.data.push({
      name: this.planetForm.value.planetName,
      color: this.planetForm.value.planetColor,
      radius: this.planetForm.value.planetRadius,
      satellites: this.planetForm.value.planetSat,
    });

    console.log(this.data);

    this.planetForm.reset();
  }

  getTotalPlanets() {
    return this.data.length;
  }
}
