import { useMemo } from 'react';

const PREDEFINED_EMOJIS = [
	'📺',
	'🎮',
	'🎵',
	'📚',
	'🎨',
	'💪',
	'🍳',
	'🎓',
	'📰',
	'🎬',
	'🛍️',
	'🎙️',
	'🎲',
	'📱',
	'☁️',
	'🔐',
	'📦',
	'🚗',
	'💄',
	'👕',
	'🏠',
	'🎯',
	'💰',
	'📧'
];

const GAP = 12;
const MAX_ROWS = 4;
const EMOJI_WIDTH = 48;
const OUTER_PADDING = 48;

const useEmojis = () => {
	const maxEmojis = useMemo(() => {
		const maxInRow = Math.floor((window.innerWidth - OUTER_PADDING - GAP) / (EMOJI_WIDTH + GAP / 2));
		const maxRows = Math.min(Math.floor(PREDEFINED_EMOJIS.length / maxInRow), MAX_ROWS);

		return maxRows * maxInRow - 1; // 1 for custom emoji
	}, []);

	const emojis = useMemo(() => {
		return maxEmojis ? PREDEFINED_EMOJIS.slice(0, maxEmojis) : PREDEFINED_EMOJIS;
	}, [maxEmojis]);

	return emojis;
};

export default useEmojis;
