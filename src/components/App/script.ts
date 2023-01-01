import {defineComponent} from 'vue';

import GonkongEditor from '@zoibana/gonkong-editor';

console.log('GonkongEditor', GonkongEditor);

export default defineComponent({
    name: 'App',
    components: {GonkongEditor},
});
