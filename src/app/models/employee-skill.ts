import { Skill } from './skill';
import { Employee } from './employee';

export interface EmployeeSkill {
  id?: number;
  skill?: Skill;
  employee?: Employee;
  level?: number;
  createdBy?: Employee;
  createdAt?: Date;
}
