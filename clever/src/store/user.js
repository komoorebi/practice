import $ from 'jquery';
import jwt_decode from 'jwt-decode';
// 第一次访问时将用户名和密码传给服务器，服务器验证正确性后，如果是正确的，传给客户端jwt（字符串），这个字符串
// 服务器不会存到数据库里，未来每一次客服端向服务端发送请求，如果该请求需要验证，客户端需附加上jwt，服务端
// 可以验证（加一个随机字符串，用加密算法求是否一样）这个jwt是否合法，jwt把用户信息存到jwt里面

const ModuleUser = {
    state: {
      id: "",
      username: "",
      photo: "",
      followerCount: 0,
      access: "",
      refresh: "",
      is_login: false,
    },
    getters: {
    },
    mutations: {
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.followerCount = user.followerCount;
            state.access = user.access;
            state.refresh = user.refresh;
            state.is_login = user.is_login;
        },
        updateAccess(state, access) {
            state.access = access;
        },
        logout(state) {
            state.id = "";
            state.username = "";
            state.photo = "";
            state.followerCount = 0;
            state.access = "";
            state.refresh = "";
            state.is_login = false;
        }
    },
    actions: {
        login(context, data) {
          $.ajax({
              url: "https://app165.acapp.acwing.com.cn/api/token/",
              type: "POST",
              data: {
                  username: data.username,
                  password: data.password,
              },
              success(resp) {
                  const {access, refresh} = resp;
                  const access_obj = jwt_decode(access);
  
                  setInterval(() => {
                      $.ajax({
                          url: "https://app165.acapp.acwing.com.cn/api/token/refresh/",
                          type: "POST",
                          data: {
                              refresh,
                          },
                          success(resp) {
                              context.commit('updateAccess', resp.access);
                          }
                      });
                  }, 4.5 * 60 * 1000);
                  $.ajax({
                      url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                      type: "GET",
                      data: {
                          user_id: access_obj.user_id,
                      },
                      headers: {
                          'Authorization': "Bearer " + access,
                      },
                      success(resp) {
                          context.commit("updateUser", {
                              ...resp,
                              access: access,
                              refresh: refresh,
                              is_login: true,
                          });
                          data.success();
                      },
                  })
              },
              error() {
                  data.error();
              }
          });
        },
    },
    modules: {
    }
  };
  
  export default ModuleUser;
  