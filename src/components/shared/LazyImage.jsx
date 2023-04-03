import { lazy, Suspense } from 'react'
import styled from 'styled-components'

const Image = lazy(() => import('./Image'))

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: silver;
  display: grid;
  place-items: center;
  color: #214e41;
  font-family: Raleway, sans-serif;
  font-weight: 700;
`

export const LazyImage = ({ ...props }) => (
  <Suspense fallback={
    <ImagePlaceholder>Loading...</ImagePlaceholder>
  }>
    <Image {...props} />
  </Suspense>
)