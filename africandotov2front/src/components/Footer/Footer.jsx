

function Footer() {
  const elements = [
    {
      header: 'Help',
      links: ['Contact', 'Support', 'Privacy'],
    },
    {
      header: 'Account',
      links: ['Login', 'Register', 'Nuevo'],
    },
    {
      header: 'Messages',
      links: ['Backup', 'History', 'Roll'],
    },
  ];

  function generateFooterElements() {
    return elements.map((column, i) => (
      <div key={i} className="w-full md:w-1/4 mb-4">
        <h4 className="font-bold text-white mb-2">
          {column.header}
        </h4>
        <ul className="text-white">
          {column.links.map((link, i) => (
            <li key={i} className="mb-2">
              <a href="#" className="text-white hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ));
  }

  return (
    <footer className="bg-primary-main text-black py-4">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row">
        <div className="md:w-3/4">{generateFooterElements()}</div>
        <div className="md:w-1/4 text-center mt-4 md:mt-0">
          <p className="text-white">&copy; Reboot Academy 2022 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
