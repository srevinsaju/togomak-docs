import { useRouter } from "next/router"

export default {
  logo: <span>togomak</span>,
  project: {
    link: 'https://github.com/srevinsaju/togomak'
  },
  // ... other theme options
  docsRepositoryBase: 'https://github.com/srevinsaju/togomak-docs/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Togomak'
      }
    }
  },
  project: {
    link: 'https://github.com/srevinsaju/togomak',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Togomak" />
      <meta property="og:description" content="A powerful pipeline orchestrator" />
    </>
  ),
  footer: {
    text: (
      <span>
      
      <strong>Togomak</strong> is licensed under MPL-2.0, © {new Date().getFullYear()} {' '}
        <a href="https://github.com/srevinsaju" target="_blank">
          <strong>Srevin Saju</strong> 
        </a> and other contributors.
        <br></br>
        <a href="https://terraform.org" target="_blank"><strong>HashiCorp Terraform</strong>, <strong>Terraform</strong></a> and the Terraform Logo are trademarks of <a href="https://hashicorp.com" target="_blank">HashiCorp</a>.
        <br></br>
        <a href="https://opentofu.org" target="_blank"><strong>OpenTofu</strong></a> is licensed under MPL-2.0 
      </span>
    )
  }
}
