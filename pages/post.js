import React from 'react';
import { useRouter } from 'next/router';

import withLayout from '../components/myLayout';

const Page = () => {
  const router = useRouter();
  const { title } = router.query

  return (
    <>
      <h1>{title}</h1>
      <p>This is post content</p>
    </>
  )
}

export default withLayout(Page)
