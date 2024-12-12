export enum ChartType {
  Bar = 'Bar',
}

export interface ChartConfig {
  labels: {
    x?: string,
    y?: string,
    z?: string,
    color?: string,
  },
  autoRotate?: boolean,
}
