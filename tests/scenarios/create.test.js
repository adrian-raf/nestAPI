import { assert } from 'chai';
import ReqresApi from '../pages/reqres.api.js';
import * as data from '../data/user.data.js';

describe('Create', () => {
  it('Should successful create data', async () => {
    const response = await ReqresApi.create_user(data.CREATE_USER);

    assert.equal(response.status, 201);
  });
});
