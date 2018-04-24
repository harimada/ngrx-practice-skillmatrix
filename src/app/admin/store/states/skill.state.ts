import { Skill, SortInfo } from "../../../models";

export interface SkillState {
  loading: boolean;
  loaded: boolean;
  entities: { [id: number]: Skill };
  sortInfo: SortInfo[];
}

export const initialState: SkillState {
    loading: false,
    loaded: false,
    entities: {},
    sortInfo: [{field: 'orderNr'}]
}

export const getLoading = (state: SkillState) => state.loading;
export const getLoaded = (state: SkillState) => state.loaded;
export const getEntities = (state: SkillState) => state.entities;
export const getSortInfo = (state: SkillState) => state.sortInfo;