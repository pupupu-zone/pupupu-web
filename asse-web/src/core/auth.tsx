// @TODO: Rewrite to RTK
import React from 'react';

export interface AuthContext {
	isAuthenticated: boolean;
	login: (username: string) => Promise<void>;
	logout: () => Promise<void>;
	user: string | null;
}

const AuthContext = React.createContext<AuthContext | null>(null);

const key = 'tanstack.auth.user';

const getStoredUser = () => {
	return localStorage.getItem(key);
};

const setStoredUser = (user: string | null) => {
	if (user) {
		localStorage.setItem(key, user);
	} else {
		localStorage.removeItem(key);
	}
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<string | null>(getStoredUser());
	const isAuthenticated = Boolean(user);

	const logout = React.useCallback(async () => {
		setStoredUser(null);
		setUser(null);
	}, []);

	const login = React.useCallback(async (username: string) => {
		setStoredUser(username);
		setUser(username);
	}, []);

	React.useEffect(() => {
		setUser(getStoredUser());
	}, []);

	return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = React.useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
