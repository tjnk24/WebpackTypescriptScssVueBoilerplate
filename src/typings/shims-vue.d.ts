declare module '*.vue' {
  import type {DefineComponent} from 'vue';

  type EmptyObject = Record<string, never>;

  const component: DefineComponent<EmptyObject, EmptyObject, any>;

  export default component;
}
