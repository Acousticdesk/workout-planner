import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { muscleGroups } from '../data';
import {muscleGroupsToInitialWorkProgress} from './app.component.utils';

interface IWeekProgress {
  [muscleGroup: string]: boolean;
}

type IMuscleGroups = string[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  brandName = 'Workout Planner';
  muscleGroups: IMuscleGroups = muscleGroups;

  constructor(private formBuilder: FormBuilder) {

  }

  weekProgressForm = this.formBuilder.group(muscleGroupsToInitialWorkProgress());

  resetWeekProgress(): void {
    this.weekProgressForm.reset();
  }
}
