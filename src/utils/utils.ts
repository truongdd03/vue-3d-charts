/**
 * Return the width of a matrix
 * @param matrix
 * @returns
 */
export const safeGetMatrixWidth = (matrix: number[][]) => {
  return matrix.length == 0 ? 0 : matrix[0].length;
};

/**
 * Return max value in matrix
 * @param matrix
 * @returns
 */
export const safeGetMaxValInMatrix = (matrix: number[][]) => {
  return Math.max(...matrix.flat());
};
