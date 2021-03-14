import { Component } from '@angular/core';
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
  weekProgress: IWeekProgress = muscleGroupsToInitialWorkProgress();

  resetWeekProgress(): void {
    this.weekProgress = muscleGroupsToInitialWorkProgress();
  }
}
