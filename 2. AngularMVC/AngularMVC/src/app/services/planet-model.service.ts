import { Injectable } from '@angular/core';

import planets from 'src/assets/planetData.json';
import { Planets } from 'src/app/types/planets';

@Injectable({
  providedIn: 'root',
})
export class PlanetModelService {
  data: Array<Planets> = planets;

  constructor() {
    this.data =
      localStorage.getItem('planets') !== null
        ? JSON.parse(localStorage.getItem('planets'))
        : planets;
  }

  addData(formObject: Planets) {
    this.data =
      localStorage.getItem('planets') !== null
        ? JSON.parse(localStorage.getItem('planets'))
        : planets;

    this.data.push(formObject);

    localStorage.setItem('planets', JSON.stringify(this.data));

    console.log(this.data);
    return this.data;
  }

  getData() {
    this.data =
      localStorage.getItem('planets') !== null
        ? JSON.parse(localStorage.getItem('planets'))
        : planets;

    return this.data;
  }

  getTotalPlanets() {
    return this.data.length;
  }
}
