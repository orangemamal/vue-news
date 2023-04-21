import ListView from './ListView.vue'
import bus from '../utils/bus.js'

export default function createListView(name) {
  return {
    // name 사용자 지정 및 인자 정의
    name,
    // 공통으로 사용할 로직 지정
    created() {
      bus.$emit('start:spinner');
      // 데이터 3초뒤에 받기
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch(error => {
          console.log(error);
        });
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}