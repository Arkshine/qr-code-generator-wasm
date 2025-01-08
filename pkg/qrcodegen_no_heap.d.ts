/* tslint:disable */
/* eslint-disable */
export function start(): void;
export class WasmQrCode {
  free(): void;
  constructor();
  generate(text: string, ecc_level: number, min_version: number, max_version: number, mask: number | undefined, boost_ecl: boolean): void;
  to_png(fg_color: string, bg_color: string, quiet_zone: number): Uint8Array;
  get_module(x: number, y: number): boolean;
  get_size(): number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_wasmqrcode_free: (a: number, b: number) => void;
  readonly wasmqrcode_new: () => number;
  readonly wasmqrcode_generate: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => [number, number];
  readonly wasmqrcode_to_png: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
  readonly wasmqrcode_get_module: (a: number, b: number, c: number) => number;
  readonly wasmqrcode_get_size: (a: number) => number;
  readonly start: () => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_3: WebAssembly.Table;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
