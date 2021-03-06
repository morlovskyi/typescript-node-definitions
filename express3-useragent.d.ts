﻿/// <reference path="node.d.ts" />
/// <reference path="express3.d.ts" />

declare module "express3" {
	interface UserAgent {
		isMobile: bool;
		isDesktop: bool;
		Browser: string;
		Version: string;
		OS: string;
		Platform: string;
		source: string;
	}

	interface Request {
		useragent: UserAgent;
	}
}

declare module "express-useragent" {
	import express3 = module('express3');

	export function express(): (req: express3.Request, res: express3.Response, next?: Function) => void;
}