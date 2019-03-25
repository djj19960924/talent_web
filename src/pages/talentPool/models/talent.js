import { getTalentList } from '@/services/talentPool';

export default {
  namespace: 'talent',
  state: {
    data: []
  },

  effects: {
    *list({payload,callback}, {call,put}) {
        const response = yield call(getTalentList, payload);
        let data = {};
        yield put({
            type: 'save',
            payload: response,
        });
        if(callback) callback(response)
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
}