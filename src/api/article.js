import http from './index'
//公司类api
const getArticle = () => {
  http.get('/api/article/list', res => {
    console.log(res.data);
  });
};
export default {
  getArticle: getArticle
}
