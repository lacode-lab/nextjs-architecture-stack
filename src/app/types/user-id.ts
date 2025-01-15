import type {Brand} from 'ts-brand'
import {make} from 'ts-brand'
import {z} from 'zod'

import { isUUID, type UUID} from '@/types/uuid'

export type UserId = Brand<'UserId', UUID>
export const toUserId =make<UserId>()
//UserId.parsse
export const UserId = z.string().refine(isUserId,{
    message: 'ユーザーIDが不正だよ'
})

export function isUserId(mabeUserId: string): mabeUserId is UserId {
    return isUUID(mabeUserId)
}
