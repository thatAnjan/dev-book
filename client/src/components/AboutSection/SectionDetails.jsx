import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
	box: {
		flexBasis: '100%',
	},
	fieldContainer: {
		width: '100%',
	},
	propertyField: {
		flexBasis: '20%',
	},
	colon: {
		flexBasis: '10%',
	},
}))

const EachField = ({ property, value }) => {
	const { fieldContainer, propertyField, colon } = useStyles()

	return (
		<Grid container className={fieldContainer}>
			<Grid item className={propertyField}>
				<Typography>{property}</Typography>
			</Grid>
			<Grid item className={colon}>
				<Typography>:</Typography>
			</Grid>

			<Grid item>
				<Typography>{value}</Typography>
			</Grid>
		</Grid>
	)
}

const SectionDetails = () => {
	const { box } = useStyles()
	return (
		<Box className={box}>
			<EachField property='School' value='HSC' />
			<EachField property='Postion' value='Student' />
			<EachField property='From' value='2011' />
			<EachField property='To' value='2017' />
		</Box>
	)
}

export default SectionDetails