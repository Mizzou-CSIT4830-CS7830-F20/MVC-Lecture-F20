import { Injectable } from '@angular/core';

import planets from 'src/assets/planetData.json';
import { Planets } from 'src/app/types/planets';

@Injectable({
  providedIn: 'root',
})
export class PlanetModelService {
  data: Array<Planets> = planets;

  constructor() {}

  addData(formObject: Planets) {
    this.data.push(formObject);
    console.log(this.data);
    return this.data;
  }

  getData() {
    return this.data;
  }

  getTotalPlanets() {
    return this.data.length;
  }
}
