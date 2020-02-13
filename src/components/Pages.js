import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        distinct(field: frontmatter___category)
        edges {
          node {
            id
            frontmatter {
              category
              path
              title
            }
          }
        }
      }
    }
  `)

  const { distinct, edges } =  data.allMdx

  let posts = []

  edges.forEach(node => {
    let key = node.node.frontmatter.category ?? 'Uncategorized'
    if (!posts.hasOwnProperty(key)) posts[key] = []
    posts[key] = [...posts[key], node.node.frontmatter]
  })

  const PageLink = ({ post }) => (
    <Link
      className="text-sm mt-2 ml-4 relative"
      to={post.path}
      activeClassName="active font-bold text-primary"
    >{post.title}
    </Link>
  )

  return (
    <>
      {distinct.map((category, index) => (
        <div key={index}>
          <h2 className="flex font-semibold items-center mt-3" >
            <span className="font-bold text-blue-800 text-sm tracking-wider uppercase">{category}</span>
          </h2>
          <section className="flex flex-col">
            {posts[category].map(post => (
              <PageLink post={post} key={post.path}/>
            ))}
          </section>
        </div>
      ))}
      {posts.hasOwnProperty('Uncategorized') &&
        <div>
          <h2 className="flex font-semibold items-center mt-3" >
            <span className="font-bold text-blue-800 text-sm tracking-wider uppercase">Others</span>
          </h2>
          <section className="flex flex-col">
            {posts['Uncategorized'].map(post => (
              <PageLink post={post} key={post.path}/>
            ))}
          </section>
        </div>
      }
    </>
  )
}

export default ComponentName

