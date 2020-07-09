const defangIPaddr = (address) => {
  const defangedAddress = address.replace(/\./g, "[.]");
  return defangedAddress;
};
