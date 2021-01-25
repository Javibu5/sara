import { Check } from "../model/check";
import { CheckId } from "../model/check-id";

export interface Checks{
    find(checkId: CheckId): Promise<Check | null>;
    save(check: Check): void;
}

export const CHECKS= 'CHECKS';