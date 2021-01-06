import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import PageLayoutComponent from 'HOC/PageLayoutComponent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import FollowButton from 'components/Buttons/FollowButton'

import createRequest from 'utils/createRequest'

const useStyles = makeStyles(({ spacing }) => ({
	buttonGridContainer: {
		margin: spacing(2, '0'),
	},
}))

const ProfileCover = dynamic(
	() => import('components/ImageComponent/ProfileCover')
)

const ProfileTabMenu = dynamic(
	() => import('components/ProfileTabMenu/ProfileTabMenu')
)

const EditButton = dynamic(() => import('components/Buttons/EditButton'))

const Content = () => {
	const [owner, setOwner] = useState(true)
	const { buttonGridContainer } = useStyles()

	return (
		<>
			{/* this for all images */}
			<ProfileCover />

			{/* for showing if user can edit their profile or follow */}
			{/* <Grid container className={buttonGridContainer} justify='flex-end'> */}
			{/* <Grid item>{owner ? <EditButton /> : <FollowButton />}</Grid> */}
			{/* </Grid> */}

			{/* horizonal menu ch */}
			{/* <ProfileTabMenu /> */}
		</>
	)
}

const UserProfilePage = () => {
	return (
		<>
			<PageLayoutComponent Content={Content} />
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({
	req: {
		cookies: { jwt },
	},
}: any) => {
	const data = await createRequest()
	return {
		props: { jwt },
	}
}

export default UserProfilePage