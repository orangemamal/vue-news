import bus from '../utils/bus.js'

export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created() {
    bus.$emit('start:spinner');
    //#1
    this.$store.dispatch('FETCH_LIST', this.$store.name)
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      })
  }
}