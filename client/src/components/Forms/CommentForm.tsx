import * as React from 'react'
import { Formik, Form, Field } from 'formik'
import Button from '@material-ui/core/Button'
import { Theme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Cookies from 'js-cookie'
import { mutate } from 'swr'

import AutoExpandField from 'components/TextFields/AutoExpandField'

import { getTotalComments } from 'graphql/queries/postQueries'

import createRequest from 'utils/createRequest'
import { commentPost } from 'graphql/mutations/postMutations'

interface Values {
	comment: ''
}

interface Props {
	postID: string
	postUserID: string
	ownUserID: string
	setNewCommentAdded: (val: boolean) => void
}

function CommentForm({
	postID,
	ownUserID,
	setNewCommentAdded,
	postUserID,
}: Props) {
	const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

	return (
		<Formik
			initialValues={{
				comment: Cookies.get('comment') || '',
			}}
			validate={(values: Values) => {
				const errors: Partial<Values> = {}
				if (!values.comment) {
					errors.comment = 'Required' as ''
				}
				return errors
			}}
			onSubmit={async ({ comment }) => {
				const values = { text: comment, postID, user: ownUserID }
				const res = await createRequest({ key: commentPost, values })

				if (res) {
					setNewCommentAdded(true)
					mutate([getTotalComments, postUserID])
					console.log(res)
				}
			}}
		>
			{({ submitForm, isSubmitting }) => (
				<Form>
					<Field component={AutoExpandField} name='comment' />
					<br />
					{isSubmitting && <div>Submitting</div>}
					<br />
					<Button
						size={matches ? 'medium' : 'small'}
						variant='contained'
						color='primary'
						disabled={isSubmitting}
						onClick={submitForm}
					>
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	)
}

export default CommentForm