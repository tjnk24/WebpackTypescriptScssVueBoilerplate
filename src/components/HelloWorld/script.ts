import {defineComponent} from 'vue';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: '',
        },
    },
    mounted() {
        console.log('msg', this.msg);
    },
});
