const nouns = [
	'Aardvark',
	'Albatross',
	'Alligator',
	'Antelope',
	'Armadillo',
	'Baboon',
	'Badger',
	'Barracuda',
	'Bat',
	'Bear',
	'Beaver',
	'Bison',
	'Buffalo',
	'Butterfly',
	'Camel',
	'Cheetah',
	'Chinchilla',
	'Chipmunk',
	'Cobra',
	'Cockatoo',
	'Coyote',
	'Crane',
	'Crocodile',
	'Dingo',
	'Dolphin',
	'Dragonfly',
	'Eagle',
	'Echidna',
	'Elephant',
	'Falcon',
	'Flamingo',
	'Fox',
	'Frog',
	'Gazelle',
	'Gecko',
	'Giraffe',
	'Goose',
	'Gorilla',
	'Hedgehog',
	'Hippo',
	'Hornet',
	'Hummingbird',
	'Iguana',
	'Jaguar',
	'Jellyfish',
	'Kangaroo',
	'Koala',
	'Lemur',
	'Leopard',
	'Llama'
];

const adjectives = [
	'Agile',
	'Adventurous',
	'Armored',
	'Nimble',
	'Resilient',
	'Curious',
	'Bold',
	'Swift',
	'Elusive',
	'Majestic',
	'Industrious',
	'Mighty',
	'Sturdy',
	'Delicate',
	'Resilient',
	'Graceful',
	'Playful',
	'Cheerful',
	'Stealthy',
	'Vibrant',
	'Sly',
	'Elegant',
	'Ancient',
	'Resourceful',
	'Intelligent',
	'Dazzling',
	'Regal',
	'Spiny',
	'Gentle',
	'Swift',
	'Graceful',
	'Clever',
	'Jumpy',
	'Lithe',
	'Camouflaged',
	'Towering',
	'Noble',
	'Powerful',
	'Prickly',
	'Mighty',
	'Fierce',
	'Tiny',
	'Colorful',
	'Stealthy',
	'Mystical',
	'Bouncy',
	'Adorable',
	'Playful',
	'Graceful',
	'Woolly'
];

const generateRandomName = () => {
	const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
	const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

	return `${randomAdjective} ${randomNoun}`;
};

export default generateRandomName;
