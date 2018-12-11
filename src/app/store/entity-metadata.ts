import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
  Hero: {},
  Villain: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = {
  Hero: 'Heroes',
  Villain: 'Villains'
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
