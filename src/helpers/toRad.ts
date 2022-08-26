/**
 * @summary Transforms an angle from degrees to radians.
 * @worklet
 */
export const toRad = (deg: number) => {
  "worklet";
  return (deg * Math.PI) / 180;
};
