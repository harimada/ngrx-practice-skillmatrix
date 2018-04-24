import { SkillArea } from './skill-area';
import { Search } from './search';

export interface Skill {
  id?: number;
  orderNr?: number;
  name?: string;
  description?: string;
  active?: boolean;
  maxLevel?: number;
  area?: SkillArea;
}

export interface SkillSearch extends Search {
  activeOnly?: boolean;
  areaId?: number;
  name?: string;
}

export interface SkillFilter {
  activeOnly?: boolean;
}
