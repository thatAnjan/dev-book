import React, { useState, ChangeEvent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { nanoid } from 'nanoid'

import { AnyObject } from 'interfaces/global'

import useGetPersonal from 'hooks/useGetPersonal'

import { personal } from './SubSection'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	heading: {
		// fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
		textTransform: 'capitalize',
	},
	accordionDetails: {
		flexWrap: 'wrap',
	},
}))

interface Props {
	name: string
	props: any
	Component: Function
	formFields: string[]
	hook: Function
}

const EachAccordion = ({ hook, name, props, Component, formFields }: Props) => {
	const { heading, accordionDetails } = useStyles()
	const userId = '5ff9939e53c3e8c7a2c4a833'

	const { data } = hook(userId)
	console.log(data)

	return (
		<Accordion TransitionProps={{ unmountOnExit: true }}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				<Typography variant='h6' className={heading}>
					{name}
				</Typography>
			</AccordionSummary>
			<AccordionDetails className={accordionDetails}>
				<Component {...props} formFields={formFields} name={name} />
			</AccordionDetails>
		</Accordion>
	)
}

const pullData = (obj: Props) => {
	const { name, props, Component, formFields } = obj

	return { name, props, Component, formFields }
}

const PersonalAccordion = () => {
	return <EachAccordion hook={useGetPersonal} {...pullData(personal)} />
}

const SimpleAccordion = () => {
	const { root } = useStyles()
	return (
		<div className={root}>
			<PersonalAccordion />
		</div>
	)
}

export default SimpleAccordion
