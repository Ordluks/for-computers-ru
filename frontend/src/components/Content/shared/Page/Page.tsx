import React, { FC } from 'react'


type PageProps = {
	pageTitle: string,
	children: React.ReactElement
}


const Page: FC<PageProps> = ({ pageTitle, children }) => {
	document.title = pageTitle
	return children
}

export default Page