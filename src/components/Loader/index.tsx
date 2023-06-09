import { LoaderWrapper } from './styles'

export function Loader() {
  return (
    <LoaderWrapper className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderWrapper>
  )
}
