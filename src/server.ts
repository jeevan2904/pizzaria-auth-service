function welcome(name: string) {
  console.log('Welcome, ' + name);

  const user = {
    name: 'Jeevan',
  };

  const fname = user.name;

  return name + fname;
}

welcome('Jeevan');
