declare module "solid-js" {
  namespace JSX {
    interface Actions {
      draggable: boolean;
      model: [() => any, (v: any) => any];
    }
  }
}
