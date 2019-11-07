import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Post from '../models/Post'
import Theme from '../../config/Theme'
import { generateSlug } from '../utils/slugs'
import { media } from '../utils/media'
import config from '../../config/SiteConfig'

const Wrapper = styled.div`
  margin: 4rem auto;
  overflow: auto;
  @media ${media.tablet} {
    margin: 2rem auto;
  }
  @media ${media.phone} {
    margin: 0rem auto;
  }
`

const Button = styled.div`
  border: 1px ${Theme.colors.grey.default} solid;
  width: 45%;
  padding: 0.5rem 1rem;

  @media ${media.tablet} {
    width: 100%;
    margin: 0.5rem auto;
  }
  @media ${media.phone} {
    width: 100%;
    margin: 0.5rem auto;
  }

  color: ${() => Theme.colors.grey.default};
  &:hover,
  &:focus {
    /* Color here is for the text colour of the link. */
    color: ${() => Theme.colors.white};
    border-color: ${Theme.colors.primary};
    background-color: ${Theme.colors.primary};
  }
`

const Prev = styled(Button)`
  text-align: center;
  float: left;
`

const Next = styled(Button)`
  text-align: center;
  float: right;
`

const LinkText = styled.div`
  text-transform: uppercase;
  font-family: ${config.headerFontFamily};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.75rem;
`

interface Props {
  next: Post
  prev: Post
}

export class PrevNext extends React.PureComponent<Props> {
  public render() {
    const { prev, next } = this.props
    return (
      <Wrapper>
        {prev && (
          <Link to={`/blog/${generateSlug(prev.frontmatter.title)}`}>
            <Prev>
              <LinkText>{prev.frontmatter.title}</LinkText>
            </Prev>
          </Link>
        )}
        {next && (
          <Link to={`/blog/${generateSlug(next.frontmatter.title)}`}>
            <Next>
              <LinkText>{next.frontmatter.title}</LinkText>
            </Next>
          </Link>
        )}
      </Wrapper>
    )
  }
}
