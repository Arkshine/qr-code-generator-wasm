# QR Code Generator WebAssembly

## Attribution

This project is a fork of [QR Code Generator](https://github.com/nayuki/QR-Code-generator) by Project Nayuki.

Original License: MIT
Original Repository: https://github.com/nayuki/QR-Code-generator

## Changes

This project includes only the Rust code from the original repository, with modifications to expose a simple JavaScript interface for Web usage through WebAssembly. The interface allows generating QR codes, converting them to PNG format, and accessing individual modules and the size of the QR code.

```js
export class WasmQrCode {
  generate(text: string, ecc_level: number, min_version: number, max_version: number, mask: number | undefined, boost_ecl: boolean): void;
  to_png(fg_color: string, bg_color: string, quiet_zone: number): Uint8Array;
  get_module(x: number, y: number): boolean;
  get_size(): number;
}
```
