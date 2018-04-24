
import { SkillArea, SortInfo } from "../../../models";

export interface SkillAreaState {
  loading: boolean;
  loaded: boolean;
  entities: { [id: number]: SkillArea };
  sortInfo: SortInfo[];
}

export const initialState: SkillAreaState = {
    loading: false,
    loaded: false,
    entities: {  },
    sortInfo: [{field : 'orderNr'}]
}

export const getLoading = (state: SkillAreaState) => state.loading;
export const getLoaded = (state: SkillAreaState) => state.loaded;
export const getEntities = (state: SkillAreaState) => state.entities;
export const getSortInfo = (state: SkillAreaState) => state.sortInfo;