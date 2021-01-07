import { gql } from 'graphql-request'

export const loginMutation = gql`
	mutation logInUser($email: String!, $password: String!) {
		loginUser(Input: { email: $email, password: $password }) {
			success
			token
			errorMessage
		}
	}
`

export const registerMutation = gql`
	mutation registerUser(
		$name: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		registerUser(
			Input: {
				name: $name
				email: $email
				password: $password
				confirmPassword: $confirmPassword
			}
		) {
			success
			token
			errorMessage
		}
	}
`
