import { dotnet as dotnetHostBuilder, } from "./dotnet.js?v=7";
function getDirectory(path) {
    var index = path.lastIndexOf("/");
    if (index !== -1) {
        return path.substring(0, index + 1);
    }
    else {
        return path;
    }
}
export async function initializeWasmSharpModule(options, callbacks) {
    const hostBuilder = dotnetHostBuilder;
    const time = performance.now();
    let resourcesToLoad = 0;
    const { getAssemblyExports, getConfig } = await hostBuilder
        .withModuleConfig({
        onConfigLoaded(config) {
            resourcesToLoad = Object.keys(config.resources?.assembly ?? {}).length;
            resourcesToLoad += Object.keys(config.resources?.pdb ?? {}).length;
            resourcesToLoad += Object.keys(config.resources?.icu ?? {}).length;
            //we are off by one when using the above - maybe its the wasm module, maybe its something else. Either way, this resolves the issue for now
            resourcesToLoad += 1;
            callbacks?.onConfigLoaded?.(config);
        },
        onDownloadResourceProgress(loaded, total) {
            callbacks?.onDownloadResourceProgress?.(loaded, resourcesToLoad);
        },
    })
        .withDiagnosticTracing(options?.enableDiagnosticTracing ?? false)
        //workaround https://github.com/dotnet/runtime/issues/94238
        //.withDebugging(options?.debugLevel ?? 1)
        .withConfig({
        debugLevel: options?.debugLevel ?? 0,
    })
        .withConfig({
        //TODO: Figure out why we need this, broken since dotnet sdk update to 8.0.101
        disableIntegrityCheck: true,
    })
        .create();
    const config = getConfig();
    console.log("WasmSharp: Config loaded", config);
    const assemblyExports = await getAssemblyExports(config.mainAssemblyName);
    const compilationInterop = assemblyExports.WasmSharp.Core.CompilationInterop;
    //TODO: Rewrite this to use new URL()
    const resolvedAssembliesUrl = new URL(options?.assembliesUrl ?? 'https://unpkg.com/@wasmsharp/core@0.10.2/');
    const diff1 = performance.now() - time;
    console.log(`Finished initialising runtime in ${diff1}ms`);
    console.log(`Using following location for assemblies: ${resolvedAssembliesUrl}`);
    const resources = config.resources;
    if (!resources) {
        throw new Error("WasmSharp: No resources found in config");
    }
    if (!resources.assembly || !resources.coreAssembly || !resources.satelliteResources) {
        throw new Error("WasmSharp: config is malformed, no assemblies found");
    }
    const assembliesAssets = resources.coreAssembly.concat(resources.assembly);
    const satelliteAssemblies = Object.values(resources.satelliteResources).flatMap((assets) => assets);
    const assemblies = assembliesAssets
        .map((x) => x)
        
        .filter((x) => {
        if (!x.resolvedUrl) {
            console.debug("WasmSharp: resolved URL is empty, skipping assembly", x.virtualPath);
        }
        return !!x.resolvedUrl;
    })
        .map((x) => new URL(x.resolvedUrl, resolvedAssembliesUrl).href);
    callbacks?.onMetadataLoad?.();
    await compilationInterop.InitAsync(assemblies);
    const diff2 = performance.now() - time;
    console.log(`Finished loading assemblies in ${diff2}ms`);
    return compilationInterop;
}
