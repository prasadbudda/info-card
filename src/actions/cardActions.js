import * as actionTypes from './actionType';

export const deleteCard = (id) => {
    return {
        type: actionTypes.REMOVE_CARD,
        id: id
    }
};