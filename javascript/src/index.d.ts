declare const mapfun: (
    callback: Function ,
    options?: {
      skip?: (string | any)[],
      key?: boolean,
      value?: boolean
    },
    ...X: any[]
  ) => any;
  
  export { mapfun };
  