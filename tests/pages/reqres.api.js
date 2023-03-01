import BaseApi from './base.api.js';

const ReqresApi = {
  register: (data) => BaseApi.post('/register', data),
  /**
   * ketika melakukan register, ada data yang dikrim,
   * makanya data dijadikan sebagai (parameter).
   * (post) merupakan methodnya dan (/register) adalah endpointnya.
   *
   *  */
  list_user: (param) => BaseApi.get(`/users?page=${param}`),
  create_user: (param) => BaseApi.post('/users', param),
};

export default ReqresApi;
