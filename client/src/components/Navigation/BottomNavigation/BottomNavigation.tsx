import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { nanoid } from 'nanoid'

import navigationItems, { NavigationItem, HOME } from './BottomNavigationData'

const useStyles = makeStyles({
	root: {
		width: '100%',
		position: 'fixed',
		bottom: 0,
	},
})

export default function LabelBottomNavigation() {
	const { push } = useRouter()

	const { root } = useStyles()
	const [value, setValue] = React.useState('recents')

	const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
		setValue(newValue)
	}

	const handleClick = (routeName: string) => {
		if (routeName === HOME) return push('/')

		push(routeName)
	}

	return (
		<BottomNavigation value={value} onChange={handleChange} className={root}>
			{navigationItems.map(({ icon: Icon, ...props }: NavigationItem) => (
				<BottomNavigationAction
					key={nanoid()}
					{...props}
					icon={<Icon />}
					onClick={() => handleClick(props.value)}
				/>
			))}
		</BottomNavigation>
	)
}