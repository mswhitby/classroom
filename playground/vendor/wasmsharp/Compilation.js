function get(json) {
    return JSON.parse(json);
}
export class Compilation {
    compilationId;
    wasmHost;
    constructor(compilationId, wasmHost) {
        this.compilationId = compilationId;
        this.wasmHost = wasmHost;
    }
    static create(code, interop) {
        const compilationId = interop.CreateNewCompilation(code);
        return new Compilation(compilationId, interop);
    }
    recompileAsync(code) {
        return Promise.resolve(this.wasmHost.Recompile(this.compilationId, code));
    }
    async getDiagnosticsAsync() {
        const diagnostics = await this.wasmHost.GetDiagnosticsAsync(this.compilationId);
        return get(diagnostics);
    }
    async getCompletions(caretPosition, filterText) {
        const completions = await this.wasmHost.GetCompletionsAsync(this.compilationId, caretPosition, filterText);
        return get(completions);
    }
    async shouldTriggerCompletionsAsync(caretPosition, character, operation) {
        if (character || operation) {
            if (character && operation) {
                return this.wasmHost.ShouldTriggerCompletionsAsync(this.compilationId, caretPosition, character, operation);
            }
            throw new TypeError("Expected both character and operation to be provided or for neither to be provided.");
        }
        return this.wasmHost.ShouldTriggerCompletionsAsync(this.compilationId, caretPosition);
    }
    async run() {
        const runResult = await this.wasmHost.RunAsync(this.compilationId);
        return get(runResult);
    }
}
