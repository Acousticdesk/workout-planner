import { muscleGroups } from '../data';

export const muscleGroupsToInitialWorkProgress = () => (
  muscleGroups.reduce((progress, muscleGroup) => ({ ...progress, [muscleGroup]: false }), {})
);
