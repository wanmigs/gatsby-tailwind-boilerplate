import React from "react"
import { Sidebar, Header, Seo } from "src/components"
import { MDXProvider } from "@mdx-js/react"
import "src/styles/app.css"
import * as MDX from "src/mdxelements"

export default ({ children, pathContext }) => {

  return (
    <>
      <Seo title={pathContext && pathContext.frontmatter ? pathContext.frontmatter.title : 'Fligbook'}/>
      <div className="flex flex-1 h-screen">
        <Sidebar />
        <div className="bg-white flex flex-1 flex-col min-w-0">
          <Header />
          <section className="flex-1 leading-loose markdown-body overflow-auto p-8">
            <MDXProvider
              components={{
                // Map HTML element tag to React component
                p: MDX.p,
                h1: MDX.H1,
                h2: MDX.H2,
                h3: MDX.H3,
                h4: MDX.H4,
                h5: MDX.H5,
                h6: MDX.H6,
                blockquote: MDX.blockquote,
                // code: MDX.CODE
                // Or define component inline
                // p: props => <p {...props} style={{ color: "rebeccapurple" }} />,
              }}
            >
              {children}
            </MDXProvider>
          </section>
        </div>
      </div>
    </>
  )
}
