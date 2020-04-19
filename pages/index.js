import React from 'react'

import withLayout from '../components/myLayout';
import Link from 'next/link';

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const Index = () => (
  <>
    <h1>Index Page</h1>
    <ul>
      <PostLink title='Next' />
      <PostLink title='JS' />
      <PostLink title='React' />
    </ul>
  </>
)

export default withLayout(Index)
