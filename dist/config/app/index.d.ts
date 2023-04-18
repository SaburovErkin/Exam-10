interface AppConfig {
    host: string;
    port: number;
}
export declare const AppConfig: (() => AppConfig) & import("@nestjs/config").ConfigFactoryKeyHost<AppConfig>;
export {};
