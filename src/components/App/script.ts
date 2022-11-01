import {defineComponent} from 'vue';

import Editor from 'test-module';

console.log('Editor', Editor);

export default defineComponent({
    name: 'App',
    components: {
        Editor,
    },
});
