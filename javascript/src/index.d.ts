declare const mapfun: (
    callback: function ,
    options?: {
      skip?: (string | any)[],
      key?: boolean,
      value?: boolean
    },
    ...X: any[]
  ) => any;
  
  export { mapfun };
  