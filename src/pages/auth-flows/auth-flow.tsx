import React, { useRef, useState, useLayoutEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Outlet, useLocation } from '@tanstack/react-router';

import Root, { PageRoot, TagLine, HighTag, LowTag, Header, PageName } from './auth-flow.styles';

const AuthFlow = () => {
	const location = useLocation();
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState(0);

	const [styles, api] = useSpring(() => ({
		height: 0,
		config: { tension: 250, friction: 25 }
	}));

	useLayoutEffect(() => {
		if (!contentRef.current) return;

		const height = contentRef.current.offsetHeight;
		setContentHeight(height);
	}, [location]);

	useLayoutEffect(() => {
		api.start({ height: contentHeight });
	}, [contentHeight, api]);

	useLayoutEffect(() => {
		const observer = new ResizeObserver(() => {
			if (contentRef.current) {
				const height = contentRef.current.offsetHeight;
				setContentHeight(height);
			}
		});

		if (contentRef.current) {
			observer.observe(contentRef.current);
		}

		return () => {
			if (contentRef.current) {
				observer.unobserve(contentRef.current);
			}
		};
	}, [location]);

	return (
		<Root>
			<TagLine>
				<HighTag>TRACK YOUR SUBSCRIPTIONS</HighTag>
				<LowTag>DOWN!</LowTag>
			</TagLine>

			<PageRoot>
				<Header>
					<div>
						<PageName>Welcome, %username%</PageName>
					</div>
				</Header>

				<animated.div style={styles}>
					<div ref={contentRef}>
						<Outlet />
					</div>
				</animated.div>
			</PageRoot>
		</Root>
	);
};

export default AuthFlow;
