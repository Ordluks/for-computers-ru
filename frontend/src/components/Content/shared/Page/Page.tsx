import React, { FC, useEffect } from 'react'


type PageProps = {
	pageTitle: string,
	children: React.ReactElement
}


const Page: FC<PageProps> = ({ pageTitle, children }) => {
	useEffect(() => {
		document.title = pageTitle + ' | ForComputers.ru'
	})
	return children
}

export default Page