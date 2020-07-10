const subdomainVisits = (cpdomains) => {
  const output = [];
  const map = new Map();
  for (const cpdomain of cpdomains) {
    const count = Number(cpdomain.split(" ")[0]);
    const subdomains = cpdomain.split(" ")[1].split(".");
    const domains = [subdomains[subdomains.length - 1]];
    subdomains.reduceRight((a, b) => {
      domains.push(`${b}.${a}`);
      return `${b}.${a}`;
    });
    domains.forEach((domain) => {
      map.has(domain)
        ? map.set(domain, map.get(domain) + count)
        : map.set(domain, count);
    });
  }
  map.forEach((value, key) => output.push(`${value} ${key}`));
  return output;
};
