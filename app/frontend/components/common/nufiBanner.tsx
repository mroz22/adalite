import {h} from 'preact'

const NufiBanner = () => {
  return (
    <a
      className="banner nufi"
      href={`${window.location.origin}/nufi`}
      rel="noopener"
      target="blank"
    >
      <img src="assets/nufi-animated-banner-light.gif" alt="NuFi - Crypto Wallet" style={{width: '100%'}} />
    </a>
  )
}

export default NufiBanner
