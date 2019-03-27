/**
 * Create @types for strtime module
 */
declare module "strtime" {
  export function strftime(
    date: number | Date,
    format: string,
    timezone?: number | string,
    options?: object
  ): string;

  export function strptime(
    timestamp: string | number,
    format: string,
    timezone?: number | string,
    options?: object
  ): Date;
}
