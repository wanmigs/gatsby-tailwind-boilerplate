import React from "react"

export const p = props => <p {...props} className="block leading-6 mb-3 w-full" />
export const H1 = props => <h1 {...props} className="font-bold mb-4 text-4xl text-blue-800 border-b" />
export const H2 = props => <h2 {...props} className="font-bold mb-4 text-3xl text-blue-900 border-b" />
export const H3 = props => <h3 {...props} className="font-bold mb-4 text-2xl" />
export const H4 = props => <h4 {...props} className="font-bold mb-4 text-lg" />
export const H5 = props => <h5 {...props} className="font-bold mb-4 text-base" />
export const H6 = props => <h6 {...props} className="font-bold mb-4 text-gray-600" />
export const blockquote = props => {
 return <blockquote {...props} className="bg-gray-200 border-gray-500 border-l-4 leading-normal px-4 py-1"/>
}
export const CODE = props => (<code {...props} className=""/>)


