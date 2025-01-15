import type {Brand} from 'ts-brand'
import {make} from 'ts-brand'
import {z} from 'zod'

import { isUUID, type UUID} from '@/types/uuid'

export type ProductCode = Brand<'UserId', UUID>
export const toProductCode =make<ProductCode>()
//UserId.parsse
export const ProductCode = z.string().refine(isProductCode,{
    message: 'ユーザーIDが不正だよ'
})

export function isProductCode(mabeProductCode: string): mabeProductCode is ProductCode {
    return isUUID(mabeProductCode)
}
