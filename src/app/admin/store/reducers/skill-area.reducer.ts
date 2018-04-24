import * as fromActions from './../actions/skill-area.action';

import {SkillAreaState, initialState} from './../states/skill-area.state';

export const reducer = (state: SkillAreaState = initialState, action: fromActions.SkillAreaAction): SkillAreaState =>{
    
    switch(action.type){
        case fromActions.LOAD_SKILL_AREAS: {
            return {
                ...state,
                loaded: false,
                loading: true
                }
        }

        case fromActions.LOAD_SKILL_AREAS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            }
        }

        case fromActions.LOAD_SKILL_AREAS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
    }
    
    return state;
}

