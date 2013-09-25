///<reference path="_ref.d.ts" />
///<reference path="tsd/_ref.ts" />
///<reference path="tsd/API.ts" />
///<reference path="tsd/CLI.ts" />
///<reference path="bootstrap.ts" />

(module).exports = {
	tsd: tsd,
	xm: xm,
	git: git,
	runARGV: tsd.runARGV,
	// move to API?
	getAPI: function (configPath:string, verbose:boolean = false):tsd.API {
		xm.assertVar('configPath', configPath, 'string');
		return new tsd.API(new tsd.Context(configPath, verbose));
	}
};