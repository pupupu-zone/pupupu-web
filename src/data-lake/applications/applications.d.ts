type LinksT = {
	referral?: string;
	promo?: string;
	homepage?: string;
};

export type Application = {
	id: string;
	user_id: string;
	category_id: string;
	name: string;
	logo_url?: string;
	color: string;
	aliases: string[];
};

export type ApplicationsSlice = {
	byId: Record<string, Application>;
	previewIds: string[];
	allIds: string[];
};
