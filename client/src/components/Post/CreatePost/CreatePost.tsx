import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Input from '@material-ui/core/Input'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import ImageIcon from '@material-ui/icons/Image'

const CreatePostModal = dynamic(() => import('./CreatePostModal'))

const useStyles = makeStyles({
	inputGridItem: {
		flexGrow: 1,
	},
	inputStyle: {
		width: '100%',
		'&&&:before': {
			borderBottom: 'none',
		},
		'&&:after': {
			borderBottom: 'none',
		},
		'& > input': {
			cursor: 'pointer',
		},
	},
	buttonGroupStyle: {
		marginTop: '1rem',
		justifyContent: 'space-evenly',
	},
	topContainerStyle: {},
})

export const CreatePost = () => {
	const { inputStyle, inputGridItem, buttonGroupStyle } = useStyles()

	const [isClicked, setIsClicked] = useState(false)

	const inputClickHandler = () => {
		setIsClicked(!isClicked)
	}

	return (
		<>
			<Card>
				<CardContent>
					<Grid container>
						<Grid item>
							<IconButton edge='start'>
								<AccountCircleIcon />
							</IconButton>
						</Grid>
						<Grid item className={inputGridItem}>
							<Input
								placeholder='write your feelings'
								className={inputStyle}
								onClick={inputClickHandler}
							/>
						</Grid>
						{isClicked && (
							<CreatePostModal isClicked={isClicked} setIsClicked={setIsClicked} />
						)}
					</Grid>
				</CardContent>
			</Card>
		</>
	)
}

export default CreatePost
