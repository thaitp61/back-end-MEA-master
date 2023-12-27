import { ApiProperty, PickType } from '@nestjs/swagger';
import joi from 'joi';
import { ImportRequestItem } from '../../import-request-item/import-request-item.entity';
import { constant } from 'src/core';

export class UpdateImportRequestItemDTO extends PickType(ImportRequestItem, ['quantity']) {
    @ApiProperty({ description: 'Supply Id', example: '1' })
    supplyId: string;

    @ApiProperty({ description: 'Equipment Id', example: '1' })
    equipmentId: string;

    static validate = joi.object<UpdateImportRequestItemDTO>({
        quantity: joi.number().min(1).required().messages(constant.messageFormat),
        supplyId: joi.string().allow(null).required().messages(constant.messageFormat),
        equipmentId: joi.string().allow(null).required().messages(constant.messageFormat),
    });
}
