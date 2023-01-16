import { ActionType } from "../action-type/actionType"
import { ActionT } from "../action_creators"
interface addCart{
    type: ActionType.ADD,
    payload: ActionT
}
interface delCart{
    type: ActionType.DELETE,
    payload: ActionT

}
export type Action = addCart | delCart
