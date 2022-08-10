type mediaQueryKeys = 'xs' | 'sm' | 'md' | 'lg';

type breakpointsType = {
  [key in mediaQueryKeys]: number;
};

const breakpoints: breakpointsType = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

const getMaxWidthString = (n: mediaQueryKeys) => {
  const bpArray = Object.keys(breakpoints).map((key) => [
    key,
    breakpoints[key as mediaQueryKeys],
  ]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `(max-width: ${size}px)`];
    return acc;
  }, []);

  return result as string;
};
const mq = (n: mediaQueryKeys) => `@media ${getMaxWidthString(n)}`;

export default mq;
export { getMaxWidthString };
