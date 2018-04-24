import { Action } from '@ngrx/store';
import { SkillArea, QueryResult } from "../../../models";

//Load Skill Area's

export const LOAD_SKILL_AREAS = '[Admin] Load Skill Areas';
export const LOAD_SKILL_AREAS_SUCCESS = '[Admin] Load Skill Areas Success';
export const LOAD_SKILL_AREAS_FAIL = '[Admin] Load Skill Areas Fail';

export class LoadSkillAreas implements Action {
       readonly  type = LOAD_SKILL_AREAS;
       constructor(){}
}

export class LoadSkillAreasSuccess implements Action {
        readonly type = LOAD_SKILL_AREAS_SUCCESS;

        constructor(public payload: QueryResult<SkillArea>){

        }

}

export class LoadSkillAreasFail implements Action {
         readonly type = LOAD_SKILL_AREAS_FAIL;
         constructor(public payload: QueryResult<SkillArea>){}
       }

  
  export type SkillAreaAction = LoadSkillAreas | LoadSkillAreasSuccess | LoadSkillAreasFail     
