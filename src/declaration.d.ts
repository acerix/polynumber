declare module '*.css' {
    const mapping: Record<string, string>
    export default mapping
}

declare module 'preact-cli/sw' {
    export function setupRouting(): void
    export function setupPrecaching(precacheFiles: Array<PrecacheEntry | string>): void
    export function getFiles(): Array<PrecacheEntry | string>
}

declare module '*.txt' {
    export default Record
}
