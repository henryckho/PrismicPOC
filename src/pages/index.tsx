import { graphql } from 'gatsby';
import * as React from 'react';

interface Props {
    data: any;
}

const HomePage = ({data}: Props) => {
  return (
    <div>
      {data.allPrismicHome.nodes[0].data.title.text}
    </div>
  )
}

export const query = graphql`
  query AllPrismicHome {
    allPrismicHome {
      nodes {
        id
        data {
          title_colour
          title {
            text
          }
        }
      }
    }
  }
`

export default HomePage