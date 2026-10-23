import { initializeWasmSharpModule } from "./initializeWasmSharpModule.js?v=4";
import { Compilation } from "./Compilation.js";
export class WasmSharpWorker {
    interop;
    constructor(interop) {
        this.interop = interop;
    }
    static async initializeAsync(options, callbacks) {
        const interop = await initializeWasmSharpModule(options, callbacks);
        return new WasmSharpWorker(interop);
    }
    createCompilationAsync(code) {
        return Promise.resolve(Compilation.create(code, this.interop));
    }
}
