export interface ChartConfig {
  labels: {
    x?: string, // x-axis's label
    y?: string, // y-axis's label
    z?: string, // z-axis's label
    color?: string, // label's color and bar's color
    xData?: string[], // The data labels for x-axis, length should match number of rows
    zData?: string[], // The data labels for z-axis, length should match number of columns
    hideXTicks?: boolean, // Should hide tick labels for x-axis?
    hideZTicks?: boolean, // Should hide tick labels for z-axis?
  },
  autoRotate?: boolean, // Auto-rotate the graph
}
