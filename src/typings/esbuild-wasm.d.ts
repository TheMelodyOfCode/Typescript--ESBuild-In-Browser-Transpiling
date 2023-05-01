declare module 'esbuild-wasm' {
    interface Service {
      build: (options: any) => Promise<any>;
      transform: (input: string, options: any) => Promise<any>;
    }
    
    export function startService({worker: boolean, wasmURL: string }): Promise<Service>;
    export function initialize(options: { wasmURL: string }): Promise<void>;
    export function transform(ts: string, arg1: { loader: string; target: string;}) {
      throw new Error('Function not implemented.');
    }
  }
  
  