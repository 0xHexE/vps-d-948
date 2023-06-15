import { Counter } from './Counter'
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
} from 'baseui/typography';
import React from 'react';

export { Page }

const textString =
  'We ignite opportunity by setting the world in motion.';

function Page() {
  return (
    <React.Fragment>
      <HeadingXXLarge>{textString}</HeadingXXLarge>
      <HeadingXLarge>{textString}</HeadingXLarge>
      <HeadingLarge>{textString}</HeadingLarge>
      <HeadingMedium>{textString}</HeadingMedium>
      <HeadingSmall>{textString}</HeadingSmall>
      <HeadingXSmall>{textString}</HeadingXSmall>
    </React.Fragment>
  )
}
