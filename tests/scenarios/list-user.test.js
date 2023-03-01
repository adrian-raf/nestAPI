import { assert } from 'chai';
import ReqresApi from '../pages/reqres.api.js';
import * as data from '../data/user.data.js';
import { getParams } from '../helpers/lib-api.js';

describe('List User', () => {
  it('Should successful get the list users in page = 2', async () => {
    const param = getParams(data.LIST_USER_PARAM['page']);
    const response = await ReqresApi.list_user(param);

    assert.equal(response.status, 200);
  });
});
