import API from '@api';

import type {
	LoginResT,
	LoginReqT,
	LogoutResT,
	LogoutReqT,
	RegisterReqT,
	RegisterResT,
	VerifyEmailReqT,
	VerifyEmailResT
} from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Login
		login: build.query<LoginResT, LoginReqT>({
			query: (body) => ({
				url: '/auth/sign-in',
				method: 'POST',
				body
			})
		}),

		// Logout
		logout: build.query<LogoutResT, LogoutReqT>({
			query: () => ({
				url: '/auth/sign-out',
				method: 'DELETE'
			})
		}),

		// Register
		register: build.query<RegisterResT, RegisterReqT>({
			query: (body) => ({
				url: '/auth/sign-up',
				method: 'POST',
				body
			})
		}),

		verifyEmail: build.query<VerifyEmailResT, VerifyEmailReqT>({
			query: (body) => ({
				url: '/auth/validate',
				method: 'POST',
				body
			})
		})
	})
});

export default idApi;
