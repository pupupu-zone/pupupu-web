import styled from 'styled-components';

export const ViewPort = styled.div`
	justify-self: center;
	width: calc(100vw - 36px);
`;

export default styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	grid-template-rows: auto min-content 1fr;
	justify-content: center;

	/* stylelint-disable declaration-block-no-redundant-longhand-properties */
	padding-top: env(safe-area-inset-top);
	padding-right: env(safe-area-inset-right);
	padding-bottom: env(safe-area-inset-bottom);
	padding-left: env(safe-area-inset-left);
`;