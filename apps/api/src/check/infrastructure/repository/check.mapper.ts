import { Injectable } from "@nestjs/common";
import { CheckDto } from "../dto/check.dto";
import { CheckView } from "../read-model/schema/check.schema";

@Injectable()
export class CheckMapper {
    viewToDto(checkView: CheckView): CheckDto {

        const { _id: id, ...data } = checkView.toObject();

        return {
            id,
            ...data
        }

    }
}