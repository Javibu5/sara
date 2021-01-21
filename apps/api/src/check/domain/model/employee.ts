import { UserDTO } from "@sara/contracts";

export class Employee extends UserDTO{

        private readonly 
        public static fromString(id: string): Employee{
            if (id.length === 0) {
                throw new Error('Invalid name');
            }
            return new Employee();
        }

        get value(): string {
            return ;
          }
    }
