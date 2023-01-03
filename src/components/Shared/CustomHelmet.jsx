import { Helmet } from "react-helmet"

const favicon = `${process.env.PUBLIC_URL}/favicon.svg`;

const CustomHelmet = ({ title, icon = favicon }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={icon} />
    </Helmet>
  )
}

export default CustomHelmet