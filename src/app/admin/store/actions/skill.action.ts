import { Action } from "@ngrx/store";
import { Skill, QueryResult } from "../../../models";

export const LOAD_SKILLS_BY_AREA = "[Admin] Load Skills By Area";
export const LOAD_SKILLS_BY_AREA_SUCCESS = '[Admin] Load Skills By Area Success';
export const LOAD_SKILLS_BY_AREA_FAIL = '[Admin] Load Skills By Area Fail';

export class LoadSkillsByArea implements Action {
       readonly  type = LOAD_SKILLS_BY_AREA;
       constructor(){}
}

export class LoadSkillsByAreaSuccess implements Action {
        readonly type = LOAD_SKILLS_BY_AREA_SUCCESS;
        constructor(public payload: QueryResult<Skill>){

        }
       }

 export class LoadSkillsByAreaFail implements Action {
          readonly type = LOAD_SKILLS_BY_AREA_FAIL;
          constructor(public payload: QueryResult<Skill>){

          }
        }  
        
 export type SkillAction = LoadSkillsByArea | LoadSkillsByAreaSuccess | LoadSkillsByAreaFail       